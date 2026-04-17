# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersActivateRetrieve**](#usersactivateretrieve) | **GET** /api/users/{uuid}/activate/{token}/ | |
|[**usersCreate**](#userscreate) | **POST** /api/users/ | |
|[**usersDestroy**](#usersdestroy) | **DELETE** /api/users/{uuid}/ | |
|[**usersList**](#userslist) | **GET** /api/users/ | |
|[**usersPartialUpdate**](#userspartialupdate) | **PATCH** /api/users/{uuid}/ | |
|[**usersRetrieve**](#usersretrieve) | **GET** /api/users/{uuid}/ | |
|[**usersUpdate**](#usersupdate) | **PUT** /api/users/{uuid}/ | |

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

# **usersCreate**
> UserSlim usersCreate(userSlimRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserSlimRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.usersCreate(
    userSlimRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userSlimRequest** | **UserSlimRequest**|  | |


### Return type

**UserSlim**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDestroy**
> usersDestroy()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.usersDestroy(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersList**
> PaginatedUserSlimList usersList()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.usersList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedUserSlimList**

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

# **usersPartialUpdate**
> UserSlim usersPartialUpdate()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    PatchedUserSlimRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)
let patchedUserSlimRequest: PatchedUserSlimRequest; // (optional)

const { status, data } = await apiInstance.usersPartialUpdate(
    uuid,
    patchedUserSlimRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUserSlimRequest** | **PatchedUserSlimRequest**|  | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**UserSlim**

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

# **usersRetrieve**
> UserDetails usersRetrieve()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.usersRetrieve(
    uuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**UserDetails**

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

# **usersUpdate**
> UserSlim usersUpdate(userSlimRequest)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserSlimRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)
let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.usersUpdate(
    uuid,
    userSlimRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userSlimRequest** | **UserSlimRequest**|  | |
| **uuid** | [**string**] |  | defaults to undefined|


### Return type

**UserSlim**

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

