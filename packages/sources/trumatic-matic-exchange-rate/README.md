# TRUMATIC-MATIC-EXCHANGE-RATE

![1.0.1](https://img.shields.io/github/package-json/v/smartcontractkit/external-adapters-js?filename=packages/sources/trumatic-matic-exchange-rate/package.json) ![v3](https://img.shields.io/badge/framework%20version-v3-blueviolet)

This document was generated automatically. Please see [README Generator](../../scripts#readme-generator) for more info.

## Environment Variables

| Required? |              Name              |                                            Description                                            |  Type  | Options |                   Default                    |
| :-------: | :----------------------------: | :-----------------------------------------------------------------------------------------------: | :----: | :-----: | :------------------------------------------: |
|    ✅     |            RPC_URL             |                              The RPC URL to connect to the EVM chain                              | string |         |                                              |
|    ✅     |            CHAIN_ID            |                                    The chain id to connect to                                     | number |         |                     `1`                      |
|    ✅     | TRUMATIC_VAULT_SHARES_CONTRACT |                    The address of the deployed TruMATIC Vault Shares contract                     | string |         | `0xA43A7c62D56dF036C187E1966c03E2799d8987ed` |
|           |     BACKGROUND_EXECUTE_MS      | The number of milliseconds the background execute should sleep before performing the next request | number |         |                    `1000`                    |

---

## Data Provider Rate Limits

There are no rate limits for this adapter.

---

## Input Parameters

Every EA supports base input parameters from [this list](https://github.com/smartcontractkit/ea-framework-js/blob/main/src/config/index.ts)

| Required? |   Name   |     Description     |  Type  |          Options           | Default  |
| :-------: | :------: | :-----------------: | :----: | :------------------------: | :------: |
|           | endpoint | The endpoint to use | string | [crypto](#crypto-endpoint) | `crypto` |

## Crypto Endpoint

`crypto` is the only supported name for this endpoint.

### Input Params

There are no input parameters for this endpoint.

### Example

There are no examples for this endpoint.

---

MIT License
