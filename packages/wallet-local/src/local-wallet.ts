import { normalizeAddressWith0x, privateKeyToAddress } from '@celo/utils/lib/address'
import { WalletBase } from '@celo/wallet-base/lib/wallet-base'
import { Wallet } from '@celo/wallet-base/types'
import { LocalSigner } from './local-signer'

export class LocalWallet extends WalletBase implements Wallet {
  /**
   * Register the private key as signer account
   * @param privateKey account private key
   */
  addAccount(privateKey: string): void {
    // Prefix 0x here or else the signed transaction produces dramatically different signer!!!
    privateKey = normalizeAddressWith0x(privateKey)
    const accountAddress = normalizeAddressWith0x(privateKeyToAddress(privateKey))
    if (this.hasAccount(accountAddress)) {
      return
    }
    this.addSigner(accountAddress, new LocalSigner(privateKey))
  }
}
