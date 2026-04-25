# DefaultColumnPreferencesApi

All URIs are relative to _http://localhost_

| Method                                                                    | HTTP request                             | Description |
| ------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| [**defaultColumnPreferencesRetrieve**](#defaultcolumnpreferencesretrieve) | **GET** /api/default-column-preferences/ |             |

# **defaultColumnPreferencesRetrieve**

> DefaultColumnPreference defaultColumnPreferencesRetrieve()

### Example

```typescript
import { DefaultColumnPreferencesApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new DefaultColumnPreferencesApi(configuration);

const { status, data } = await apiInstance.defaultColumnPreferencesRetrieve();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**DefaultColumnPreference**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
