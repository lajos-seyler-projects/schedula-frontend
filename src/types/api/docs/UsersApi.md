# UsersApi

All URIs are relative to _http://localhost_

| Method                                                    | HTTP request                                | Description |
| --------------------------------------------------------- | ------------------------------------------- | ----------- |
| [**usersActivateRetrieve**](#usersactivateretrieve)       | **GET** /api/users/{uuid}/activate/{token}/ |             |
| [**usersCreate**](#userscreate)                           | **POST** /api/users/                        |             |
| [**usersDestroy**](#usersdestroy)                         | **DELETE** /api/users/{uuid}/               |             |
| [**usersGroupsCreate**](#usersgroupscreate)               | **POST** /api/users/{uuid}/groups/          |             |
| [**usersGroupsDeleteDestroy**](#usersgroupsdeletedestroy) | **DELETE** /api/users/{uuid}/groups/delete/ |             |
| [**usersGroupsDestroy**](#usersgroupsdestroy)             | **DELETE** /api/users/{uuid}/groups/{id}/   |             |
| [**usersGroupsList**](#usersgroupslist)                   | **GET** /api/users/{uuid}/groups/           |             |
| [**usersGroupsPartialUpdate**](#usersgroupspartialupdate) | **PATCH** /api/users/{uuid}/groups/{id}/    |             |
| [**usersGroupsRetrieve**](#usersgroupsretrieve)           | **GET** /api/users/{uuid}/groups/{id}/      |             |
| [**usersGroupsUpdate**](#usersgroupsupdate)               | **PUT** /api/users/{uuid}/groups/{id}/      |             |
| [**usersList**](#userslist)                               | **GET** /api/users/                         |             |
| [**usersPartialUpdate**](#userspartialupdate)             | **PATCH** /api/users/{uuid}/                |             |
| [**usersRetrieve**](#usersretrieve)                       | **GET** /api/users/{uuid}/                  |             |
| [**usersUpdate**](#usersupdate)                           | **PUT** /api/users/{uuid}/                  |             |

# **usersActivateRetrieve**

> ActivationResponse usersActivateRetrieve()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let token: string; //Activation token of the User. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)

const { status, data } = await apiInstance.usersActivateRetrieve(token, uuid);
```

### Parameters

| Name      | Type         | Description                   | Notes                 |
| --------- | ------------ | ----------------------------- | --------------------- |
| **token** | [**string**] | Activation token of the User. | defaults to undefined |
| **uuid**  | [**string**] | UUID of the User.             | defaults to undefined |

### Return type

**ActivationResponse**

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

# **usersCreate**

> UserSlim usersCreate(userSlimRequest)

### Example

```typescript
import { UsersApi, Configuration, UserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.usersCreate(userSlimRequest);
```

### Parameters

| Name                | Type                | Description | Notes |
| ------------------- | ------------------- | ----------- | ----- |
| **userSlimRequest** | **UserSlimRequest** |             |       |

### Return type

**UserSlim**

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

# **usersDestroy**

> usersDestroy()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.usersDestroy(uuid);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **uuid** | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **204**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGroupsCreate**

> Group usersGroupsCreate(groupRequest)

### Example

```typescript
import { UsersApi, Configuration, GroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; //UUID of the User. (default to undefined)
let groupRequest: GroupRequest; //

const { status, data } = await apiInstance.usersGroupsCreate(
  uuid,
  groupRequest,
);
```

### Parameters

| Name             | Type             | Description       | Notes                 |
| ---------------- | ---------------- | ----------------- | --------------------- |
| **groupRequest** | **GroupRequest** |                   |                       |
| **uuid**         | [**string**]     | UUID of the User. | defaults to undefined |

### Return type

**Group**

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

# **usersGroupsDeleteDestroy**

> usersGroupsDeleteDestroy()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; //UUID of the User. (default to undefined)

const { status, data } = await apiInstance.usersGroupsDeleteDestroy(uuid);
```

### Parameters

| Name     | Type         | Description       | Notes                 |
| -------- | ------------ | ----------------- | --------------------- |
| **uuid** | [**string**] | UUID of the User. | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **204**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGroupsDestroy**

> usersGroupsDestroy()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this group. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)

const { status, data } = await apiInstance.usersGroupsDestroy(id, uuid);
```

### Parameters

| Name     | Type         | Description                                    | Notes                 |
| -------- | ------------ | ---------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this group. | defaults to undefined |
| **uuid** | [**string**] | UUID of the User.                              | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **204**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGroupsList**

> PaginatedGroupList usersGroupsList()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; //UUID of the User. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)

const { status, data } = await apiInstance.usersGroupsList(
  uuid,
  page,
  pageSize,
);
```

### Parameters

| Name         | Type         | Description                                    | Notes                            |
| ------------ | ------------ | ---------------------------------------------- | -------------------------------- |
| **uuid**     | [**string**] | UUID of the User.                              | defaults to undefined            |
| **page**     | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined |
| **pageSize** | [**number**] | Number of results to return per page.          | (optional) defaults to undefined |

### Return type

**PaginatedGroupList**

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

# **usersGroupsPartialUpdate**

> Group usersGroupsPartialUpdate()

### Example

```typescript
import { UsersApi, Configuration, PatchedGroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this group. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)
let patchedGroupRequest: PatchedGroupRequest; // (optional)

const { status, data } = await apiInstance.usersGroupsPartialUpdate(
  id,
  uuid,
  patchedGroupRequest,
);
```

### Parameters

| Name                    | Type                    | Description                                    | Notes                 |
| ----------------------- | ----------------------- | ---------------------------------------------- | --------------------- |
| **patchedGroupRequest** | **PatchedGroupRequest** |                                                |                       |
| **id**                  | [**number**]            | A unique integer value identifying this group. | defaults to undefined |
| **uuid**                | [**string**]            | UUID of the User.                              | defaults to undefined |

### Return type

**Group**

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

# **usersGroupsRetrieve**

> Group usersGroupsRetrieve()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this group. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)

const { status, data } = await apiInstance.usersGroupsRetrieve(id, uuid);
```

### Parameters

| Name     | Type         | Description                                    | Notes                 |
| -------- | ------------ | ---------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this group. | defaults to undefined |
| **uuid** | [**string**] | UUID of the User.                              | defaults to undefined |

### Return type

**Group**

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

# **usersGroupsUpdate**

> Group usersGroupsUpdate(groupRequest)

### Example

```typescript
import { UsersApi, Configuration, GroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; //A unique integer value identifying this group. (default to undefined)
let uuid: string; //UUID of the User. (default to undefined)
let groupRequest: GroupRequest; //

const { status, data } = await apiInstance.usersGroupsUpdate(
  id,
  uuid,
  groupRequest,
);
```

### Parameters

| Name             | Type             | Description                                    | Notes                 |
| ---------------- | ---------------- | ---------------------------------------------- | --------------------- |
| **groupRequest** | **GroupRequest** |                                                |                       |
| **id**           | [**number**]     | A unique integer value identifying this group. | defaults to undefined |
| **uuid**         | [**string**]     | UUID of the User.                              | defaults to undefined |

### Return type

**Group**

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

# **usersList**

> PaginatedUserSlimList usersList()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let emailIcontains: string; // (optional) (default to undefined)
let firstNameIcontains: string; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let isSuperuser: boolean; // (optional) (default to undefined)
let lastNameIcontains: string; // (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let pageSize: number; //Number of results to return per page. (optional) (default to undefined)
let usernameIcontains: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersList(
  emailIcontains,
  firstNameIcontains,
  isActive,
  isSuperuser,
  lastNameIcontains,
  page,
  pageSize,
  usernameIcontains,
);
```

### Parameters

| Name                   | Type          | Description                                    | Notes                            |
| ---------------------- | ------------- | ---------------------------------------------- | -------------------------------- |
| **emailIcontains**     | [**string**]  |                                                | (optional) defaults to undefined |
| **firstNameIcontains** | [**string**]  |                                                | (optional) defaults to undefined |
| **isActive**           | [**boolean**] |                                                | (optional) defaults to undefined |
| **isSuperuser**        | [**boolean**] |                                                | (optional) defaults to undefined |
| **lastNameIcontains**  | [**string**]  |                                                | (optional) defaults to undefined |
| **page**               | [**number**]  | A page number within the paginated result set. | (optional) defaults to undefined |
| **pageSize**           | [**number**]  | Number of results to return per page.          | (optional) defaults to undefined |
| **usernameIcontains**  | [**string**]  |                                                | (optional) defaults to undefined |

### Return type

**PaginatedUserSlimList**

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

# **usersPartialUpdate**

> UserSlim usersPartialUpdate()

### Example

```typescript
import { UsersApi, Configuration, PatchedUserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)
let patchedUserSlimRequest: PatchedUserSlimRequest; // (optional)

const { status, data } = await apiInstance.usersPartialUpdate(
  uuid,
  patchedUserSlimRequest,
);
```

### Parameters

| Name                       | Type                       | Description | Notes                 |
| -------------------------- | -------------------------- | ----------- | --------------------- |
| **patchedUserSlimRequest** | **PatchedUserSlimRequest** |             |                       |
| **uuid**                   | [**string**]               |             | defaults to undefined |

### Return type

**UserSlim**

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

# **usersRetrieve**

> UserDetails usersRetrieve()

### Example

```typescript
import { UsersApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)

const { status, data } = await apiInstance.usersRetrieve(uuid);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **uuid** | [**string**] |             | defaults to undefined |

### Return type

**UserDetails**

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

# **usersUpdate**

> UserSlim usersUpdate(userSlimRequest)

### Example

```typescript
import { UsersApi, Configuration, UserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let uuid: string; // (default to undefined)
let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.usersUpdate(uuid, userSlimRequest);
```

### Parameters

| Name                | Type                | Description | Notes                 |
| ------------------- | ------------------- | ----------- | --------------------- |
| **userSlimRequest** | **UserSlimRequest** |             |                       |
| **uuid**            | [**string**]        |             | defaults to undefined |

### Return type

**UserSlim**

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
