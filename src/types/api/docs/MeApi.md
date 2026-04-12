# MeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mePartialUpdate**](#mepartialupdate) | **PATCH** /api/me/ | |
|[**meRetrieve**](#meretrieve) | **GET** /api/me/ | |

# **mePartialUpdate**
> UserMe mePartialUpdate()

User retrieve and update viewsets for the current user

### Example

```typescript
import {
    MeApi,
    Configuration,
    PatchedUserMeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let patchedUserMeRequest: PatchedUserMeRequest; // (optional)

const { status, data } = await apiInstance.mePartialUpdate(
    patchedUserMeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUserMeRequest** | **PatchedUserMeRequest**|  | |


### Return type

**UserMe**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **meRetrieve**
> UserMe meRetrieve()

User retrieve and update viewsets for the current user

### Example

```typescript
import {
    MeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.meRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserMe**

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

