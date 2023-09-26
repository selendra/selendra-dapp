import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToOne as OneToOne_} from "typeorm"
import {Extrinsic} from "./extrinsic.model"
import {DecodedContractEvent} from "./decodedContractEvent.model"

@Entity_()
export class ContractEvent {
  constructor(props?: Partial<ContractEvent>) {
    Object.assign(this, props)
  }

  /**
   * Event ID
   */
  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  blockNumber!: string

  @Column_("text", {nullable: false})
  indexInBlock!: string

  @Column_("text", {nullable: false})
  contractAddress!: string

  @Column_("bytea", {nullable: false})
  data!: Uint8Array

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Index_()
  @ManyToOne_(() => Extrinsic, {nullable: true})
  extrinsic!: Extrinsic

  @OneToOne_(() => DecodedContractEvent)
  decodedEvent!: DecodedContractEvent | undefined | null
}
