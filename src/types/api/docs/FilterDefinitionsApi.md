# FilterDefinitionsApi

All URIs are relative to _http://localhost_

| Method                                                      | HTTP request                          | Description |
| ----------------------------------------------------------- | ------------------------------------- | ----------- |
| [**filterDefinitionsList**](#filterdefinitionslist)         | **GET** /api/filter-definitions/      |             |
| [**filterDefinitionsRetrieve**](#filterdefinitionsretrieve) | **GET** /api/filter-definitions/{id}/ |             |

# **filterDefinitionsList**

> Array<FilterDefinition> filterDefinitionsList()

### Example

```typescript
import { FilterDefinitionsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new FilterDefinitionsApi(configuration);

let tableId: string; // (default to undefined)

const { status, data } = await apiInstance.filterDefinitionsList(tableId);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **tableId** | [**string**] |             | defaults to undefined |

### Return type

**Array<FilterDefinition>**

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

# **filterDefinitionsRetrieve**

> FilterDefinition filterDefinitionsRetrieve()

### Example

```typescript
import { FilterDefinitionsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new FilterDefinitionsApi(configuration);

let id: number; //A unique integer value identifying this Filter Definition. (default to undefined)

const { status, data } = await apiInstance.filterDefinitionsRetrieve(id);
```

### Parameters

| Name   | Type         | Description                                                | Notes                 |
| ------ | ------------ | ---------------------------------------------------------- | --------------------- |
| **id** | [**number**] | A unique integer value identifying this Filter Definition. | defaults to undefined |

### Return type

**FilterDefinition**

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
