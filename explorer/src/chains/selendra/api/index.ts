export * from './events'
export * from './сalls'

import { ChainApi } from '../../interfaces/chainApi'
import {
  getBalanceSetAccount,
  getDepositAccount,
  getEndowedAccount,
  getReserveRepatriatedAccounts,
  getReservedAccount,
  getSlashedAccount,
  getTransferAccounts,
  getUnreservedAccount,
  getWithdrawAccount,
  Transfer,
  getIdentityCleared,
  IdentityKilled,
  IdentitySubRemoved,
  IdentitySubRevoked,
  getStakingRewarded
} from './events'

import {
  callPayoutStakers,
} from './сalls'
import {
  getBalancesAccountBalances,
  getSystemAccountBalances,
  getTotalIssuance
} from './storage'

export const api: ChainApi = {
  events: {
    getBalanceSetAccount,
    getTransferAccounts,
    getEndowedAccount,
    getDepositAccount,
    getReservedAccount,
    getUnreservedAccount,
    getWithdrawAccount,
    getSlashedAccount,
    getReserveRepatriatedAccounts,
    getIdentityCleared,
    getStakingRewarded
  },
  storage: {
    getBalancesAccountBalances,
    getSystemAccountBalances,
    getTotalIssuance
  },
  calls: {
    callPayoutStakers
  }
}
