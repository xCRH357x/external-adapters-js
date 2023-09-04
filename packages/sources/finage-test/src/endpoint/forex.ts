import { ForexPriceEndpoint } from '@chainlink/external-adapter-framework/adapter'
import { TransportRoutes } from '@chainlink/external-adapter-framework/transports'
import overrides from '../config/overrides.json'
import { httpTransport } from '../transport/forex-http'
import { ForexBaseEndpointTypes, forexPriceInputParameters } from './utils'
import { wsTransport } from '../transport/forex-ws'

export const endpoint = new ForexPriceEndpoint({
  name: 'forex',
  transportRoutes: new TransportRoutes<ForexBaseEndpointTypes>()
    .register('ws', wsTransport)
    .register('rest', httpTransport),
  defaultTransport: 'rest',
  customRouter: (_req, adapterConfig) => {
    return adapterConfig.WS_ENABLED ? 'ws' : 'rest'
  },
  inputParameters: forexPriceInputParameters,
  overrides: overrides.finage,
})
