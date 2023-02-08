import { ChainId } from './types';

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://mainnet.infura.io/v3',
  [ChainId.TESTNET]: 'https://ropsten.infura.io',
}

const PUBLIC_CHAIN_ID = parseInt(process.env.VUE_APP_PUBLIC_CHAIN_ID);
export const NETWORK_URL: string = NETWORK_URLS[PUBLIC_CHAIN_ID];
export const CHAIN_ID = PUBLIC_CHAIN_ID;

export default NETWORK_URLS;
