import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)
// const { chainId } = useActiveWeb3React()`
export const CAKE_BNB_LP_MAINNET = '0x717Ef9CF2cB13e414Fa567e6070a7737E0CF7C17'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'STEALTH',
    lpAddresses: {
      8453: '',
      1: '0xB18F98822C22492Bd6b77D19cae9367f3D60fcBf',
      5: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
    isTokenOnly: true,
  },
  {
    pid: 1,
    lpSymbol: 'STEALTH-ETH LP',
    lpAddresses: {
      8453: '',
      1: CAKE_BNB_LP_MAINNET,
      5: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'STEALTH-USDC LP',
    lpAddresses: {
      8453: '',
      1: '0x30885515b9AeCc599Dc6D48106B471EAd26dEBB0',
      5: '',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      8453: '',
      1: '0xA8f8B7C0a4ec1ca9fA115dAe915e33AEDdf2526B',
      5: '',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'WETH',
    lpAddresses: {
      8453: '',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      5: '',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdt,
    isTokenOnly: true,
  },
  {
    pid: 5,
    lpSymbol: 'USDC',
    lpAddresses: {
      8453: '',
      1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      5: '',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.usdt,
    isTokenOnly: true,
  },
]

export default farms
