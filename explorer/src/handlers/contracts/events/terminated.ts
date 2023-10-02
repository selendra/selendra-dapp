import { SubstrateBlock } from '@subsquid/substrate-processor'
import { api } from "../../../chains";
import { ActivityType, Contract, ContractCode } from '../../../model'
import abiDecoder from '../../../interfaces/abi/decoder'
import { addDecodedActivityEntities, decodeData } from '../metadata'
import {
  updateAccountBalance,
  createExtrinsic,
  createEvent,
  getOrCreateAccount,
  createActivity,
  saveAll
} from '../../../utils'

import {
  Ctx,
  Event,
  EventHandler,
  ExtrinsicArg,
  OptEntity
} from '../../../interfaces/handler'

export const contractsTerminatedHandler: EventHandler = {
  name: 'Contracts.Terminated',
  handle: async (
    ctx: Ctx,
    event: Event,
    block: SubstrateBlock
  ): Promise<void> => {
    const { store, log } = ctx
    const { extrinsic, call } = event
    const { contract, beneficiary } = new api.events.NormalisedContractTerminatedEvent(
      ctx,
      event
    ).resolve()

    log.info({ contract, beneficiary }, 'Contract has been terminated')

    const contractEntity = await store.get(Contract, {
      where: { id: contract },
      relations: {
        account: true,
        deployer: true,
        createdFrom: true,
        contractCode: true
      }
    })
    // Update balances since terminated contract will transfer remaining balance to beneficiary
    const contractAccount = await updateAccountBalance(ctx, contract, block)
    const beneficiaryAccount = await updateAccountBalance(
      ctx,
      beneficiary,
      block
    )

    if (contractEntity === undefined) {
      throw new Error(
        `Contract entity is not found in the database for contract address [${contract}]`
      )
    }

    if (extrinsic && call) {
      const entities: OptEntity[] = []
      const extrinsicEntity = createExtrinsic(extrinsic, call, block)
      const eventEntity = createEvent(extrinsicEntity, event)
      const extrinsicSigner = extrinsicEntity.signer
        ? await getOrCreateAccount(store, extrinsicEntity.signer, block)
        : undefined
      contractEntity.terminatedAt = new Date(block.timestamp)
      contractEntity.terminatedFrom = extrinsicEntity
      contractEntity.terminationBeneficiary = beneficiaryAccount
      const activityEntity = createActivity(
        extrinsicEntity,
        ActivityType.CONTRACTTERMINATE,
        contractAccount,
        extrinsicSigner
      )
      entities.push(
        contractAccount,
        beneficiaryAccount,
        extrinsicSigner,
        extrinsicEntity,
        eventEntity,
        contractEntity,
        activityEntity
      )

      const { data } = <ExtrinsicArg>extrinsicEntity.args

      // Decode data with ABI
      await decodeData(
        data,
        async (rawData: string | Uint8Array | Buffer) => {
          // We get the contract code entity from DB instead of on-chain storage
          // since contract doesn't exist anymore
          const contractCodeEntity = await store.get(ContractCode, {
            where: {
              contractsDeployed: {
                id: contract
              }
            }
          })

          if (contractCodeEntity) {
            const decodedElement = await abiDecoder.decodeMessage({
              codeHash: contractCodeEntity.id,
              data: rawData
            })

            addDecodedActivityEntities({
              entities,
              decodedElement,
              activityEntity
            })
          }
        },
        (errorMessage) =>
          log.error(
            { contract, block: block.height, data, error: errorMessage },
            'Error while decoding data at contract terminated event.'
          )
      )

      await saveAll(store, entities)
    } else {
      log.warn(
        {
          block: block.height,
          name: event.name,
          id: event.id,
          contract,
          beneficiary
        },
        'No extrinsic or call field in event. Contract terminated info not updated.'
      )
      log.debug({ block, event })
    }
  }
}
