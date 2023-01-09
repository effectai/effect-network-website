import { Api, JsonRpc } from 'eosjs'

export default (context, inject) => {
  // TODO add proper handling of prefix protocol and postfix port
  // http & 8888 for localhost
  // https & 443 for mainnet and testnet
  // JS substring function?

  // const { protocolUrl, eosNodeUrl, portUrl } = process.env
  const url = 'https://eos.greymass.com:443'
  const rpc = new JsonRpc(url)
  const api = new Api({ rpc })

  inject('eos', api)
}
