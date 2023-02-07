import { ChainId } from '../config/constants/types'
import addresses from '../config/constants/contracts'
import { Address } from '../config/constants/types'
import { CHAIN_ID } from '@/config/constants/networks'

export const getAddress = (address: Address): string => {
  return address[CHAIN_ID] ? address[CHAIN_ID] : address[ChainId.MAINNET]
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall);
}