# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersActivateRetrieve**](#usersactivateretrieve) | **GET** /api/users/{uuid}/activate/{token}/ | |

# **usersActivateRetrieve**
> ActivationResponse usersActivateRetrieve()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Activation token of the User. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)

const { status, data } = await apiInstance.usersActivateRetrieve(
    token,
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Activation token of the User. | defaults to undefined|
| **uuid** | [**string**] | UUID of the User. | defaults to undefined|


### Return type

**ActivationResponse**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

