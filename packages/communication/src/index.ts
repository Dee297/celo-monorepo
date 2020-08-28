import { Wallet } from '@celo/wallet-base/types'
import Web3 from 'web3'
import { NodeCommunicationWrapper } from './node-communication-wrapper'
export * from './abi'
export * from './commons'
export * from './node-communication-wrapper'
export * from './utils/abi-utils'
export * from './utils/celo-transaction-object'
export * from './utils/rpc-caller'
export * from './utils/tx-result'

/**
 * Creates a new instance of `CommunicationWrapper` with a web3 instance
 * @param web3 Web3 instance
 */
export function newCommunicationWrapperFromWeb3(web3: Web3, wallet?: Wallet) {
  if (!web3.currentProvider) {
    throw new Error('Must have a valid Provider')
  }
  return new NodeCommunicationWrapper(web3, wallet)
}