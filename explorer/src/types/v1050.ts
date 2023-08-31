import type {Result} from './support'

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface AccountInfo {
  nonce: number
  refcount: number
  data: AccountData
}
