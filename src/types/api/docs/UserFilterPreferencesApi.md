# UserFilterPreferencesApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                          | Description |
| --------------------------------------------------------------- | ------------------------------------- | ----------- |
| [**userFilterPreferencesUpdate**](#userfilterpreferencesupdate) | **PUT** /api/user-filter-preferences/ |             |

# **userFilterPreferencesUpdate**

> UserFilterPreference userFilterPreferencesUpdate(userFilterPreferenceRequest)

Bulk create or update user filter preferences for a specific table. Request body example: { \"table_id\": \"users\", \"filter_preferences\": [ {\"name\": \"username\", \"is_visible\": true}, {\"name\": \"first_naem\", \"is_visible\": false}, {\"name\": \"is_superuser\", \"is_visible\": true} ] }

### Example

```typescript
import {
  UserFilterPreferencesApi,
  Configuration,
  UserFilterPreferenceRequest,
} from './api';

const configuration = new Configuration();
const apiInstance = new UserFilterPreferencesApi(configuration);

let userFilterPreferenceRequest: UserFilterPreferenceRequest; //

const { status, data } = await apiInstance.userFilterPreferencesUpdate(
  userFilterPreferenceRequest,
);
```

### Parameters

| Name                            | Type                            | Description | Notes |
| ------------------------------- | ------------------------------- | ----------- | ----- |
| **userFilterPreferenceRequest** | **UserFilterPreferenceRequest** |             |       |

### Return type

**UserFilterPreference**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
