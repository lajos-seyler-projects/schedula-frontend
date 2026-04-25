# UserColumnPreferencesApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                           | Description |
| --------------------------------------------------------------- | -------------------------------------- | ----------- |
| [**userColumnPreferencesCreate**](#usercolumnpreferencescreate) | **POST** /api/user-column-preferences/ |             |
| [**userColumnPreferencesList**](#usercolumnpreferenceslist)     | **GET** /api/user-column-preferences/  |             |

# **userColumnPreferencesCreate**

> UserColumnPreference userColumnPreferencesCreate(userColumnPreferenceRequest)

Bulk create or update user column preferences for a specific table. Request body example: { \"table_id\": \"users\", \"column_preferences\": [ {\"key\": \"username\", \"is_visible\": true, \"label\": \"Username\"}, {\"key\": \"first_name\", \"is_visible\": true, \"label\": \"First Name\"}, {\"key\": \"last_name\", \"is_visible\": false, \"label\": \"Last Name\"}, ] }

### Example

```typescript
import {
  UserColumnPreferencesApi,
  Configuration,
  UserColumnPreferenceRequest,
} from './api';

const configuration = new Configuration();
const apiInstance = new UserColumnPreferencesApi(configuration);

let userColumnPreferenceRequest: UserColumnPreferenceRequest; //

const { status, data } = await apiInstance.userColumnPreferencesCreate(
  userColumnPreferenceRequest,
);
```

### Parameters

| Name                            | Type                            | Description | Notes |
| ------------------------------- | ------------------------------- | ----------- | ----- |
| **userColumnPreferenceRequest** | **UserColumnPreferenceRequest** |             |       |

### Return type

**UserColumnPreference**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userColumnPreferencesList**

> Array<UserColumnPreference> userColumnPreferencesList()

### Example

```typescript
import { UserColumnPreferencesApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UserColumnPreferencesApi(configuration);

let tableId: string; // (default to undefined)

const { status, data } = await apiInstance.userColumnPreferencesList(tableId);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **tableId** | [**string**] |             | defaults to undefined |

### Return type

**Array<UserColumnPreference>**

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
