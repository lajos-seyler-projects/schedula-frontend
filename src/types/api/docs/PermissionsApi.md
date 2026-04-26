# PermissionsApi

All URIs are relative to _http://localhost_

| Method                                          | HTTP request                   | Description |
| ----------------------------------------------- | ------------------------------ | ----------- |
| [**permissionsList**](#permissionslist)         | **GET** /api/permissions/      |             |
| [**permissionsRetrieve**](#permissionsretrieve) | **GET** /api/permissions/{id}/ |             |

# **permissionsList**

> PaginatedPermissionList permissionsList()

### Example

```typescript
import { PermissionsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new PermissionsApi(configuration);

let nameIcontains: string; // (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.permissionsList(
  nameIcontains,
  page,
  pageSize,
);
```

### Parameters

| Name              | Type         | Description                                    | Notes                            |
| ----------------- | ------------ | ---------------------------------------------- | -------------------------------- |
| **nameIcontains** | [**string**] |                                                | (optional) defaults to undefined |
| **page**          | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined |
| **pageSize**      | [**number**] | Number of results to return per page.          | (optional) defaults to undefined |

### Return type

**PaginatedPermissionList**

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

# **permissionsRetrieve**

> Permission permissionsRetrieve()

### Example

```typescript
import { PermissionsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new PermissionsApi(configuration);

let id: number; //A unique integer value identifying this permission. (default to undefined)

const { status, data } = await apiInstance.permissionsRetrieve(id);
```

### Parameters

| Name   | Type         | Description                                         | Notes                 |
| ------ | ------------ | --------------------------------------------------- | --------------------- |
| **id** | [**number**] | A unique integer value identifying this permission. | defaults to undefined |

### Return type

**Permission**

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
