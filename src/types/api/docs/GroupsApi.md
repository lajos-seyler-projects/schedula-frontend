# GroupsApi

All URIs are relative to _http://localhost_

| Method                                                                | HTTP request                                      | Description |
| --------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| [**groupsCreate**](#groupscreate)                                     | **POST** /api/groups/                             |             |
| [**groupsDestroy**](#groupsdestroy)                                   | **DELETE** /api/groups/{name}/                    |             |
| [**groupsList**](#groupslist)                                         | **GET** /api/groups/                              |             |
| [**groupsPartialUpdate**](#groupspartialupdate)                       | **PATCH** /api/groups/{name}/                     |             |
| [**groupsPermissionsCreate**](#groupspermissionscreate)               | **POST** /api/groups/{name}/permissions/          |             |
| [**groupsPermissionsDeleteDestroy**](#groupspermissionsdeletedestroy) | **DELETE** /api/groups/{name}/permissions/delete/ |             |
| [**groupsPermissionsDestroy**](#groupspermissionsdestroy)             | **DELETE** /api/groups/{name}/permissions/{id}/   |             |
| [**groupsPermissionsList**](#groupspermissionslist)                   | **GET** /api/groups/{name}/permissions/           |             |
| [**groupsPermissionsPartialUpdate**](#groupspermissionspartialupdate) | **PATCH** /api/groups/{name}/permissions/{id}/    |             |
| [**groupsPermissionsRetrieve**](#groupspermissionsretrieve)           | **GET** /api/groups/{name}/permissions/{id}/      |             |
| [**groupsPermissionsUpdate**](#groupspermissionsupdate)               | **PUT** /api/groups/{name}/permissions/{id}/      |             |
| [**groupsRetrieve**](#groupsretrieve)                                 | **GET** /api/groups/{name}/                       |             |
| [**groupsUpdate**](#groupsupdate)                                     | **PUT** /api/groups/{name}/                       |             |
| [**groupsUsersCreate**](#groupsuserscreate)                           | **POST** /api/groups/{name}/users/                |             |
| [**groupsUsersDeleteDestroy**](#groupsusersdeletedestroy)             | **DELETE** /api/groups/{name}/users/delete/       |             |
| [**groupsUsersDestroy**](#groupsusersdestroy)                         | **DELETE** /api/groups/{name}/users/{id}/         |             |
| [**groupsUsersList**](#groupsuserslist)                               | **GET** /api/groups/{name}/users/                 |             |
| [**groupsUsersPartialUpdate**](#groupsuserspartialupdate)             | **PATCH** /api/groups/{name}/users/{id}/          |             |
| [**groupsUsersRetrieve**](#groupsusersretrieve)                       | **GET** /api/groups/{name}/users/{id}/            |             |
| [**groupsUsersUpdate**](#groupsusersupdate)                           | **PUT** /api/groups/{name}/users/{id}/            |             |

# **groupsCreate**

> Group groupsCreate(groupRequest)

### Example

```typescript
import { GroupsApi, Configuration, GroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupRequest: GroupRequest; //

const { status, data } = await apiInstance.groupsCreate(groupRequest);
```

### Parameters

| Name             | Type             | Description | Notes |
| ---------------- | ---------------- | ----------- | ----- |
| **groupRequest** | **GroupRequest** |             |       |

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

# **groupsDestroy**

> groupsDestroy()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.groupsDestroy(name);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **name** | [**string**] |             | defaults to undefined |

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

# **groupsList**

> PaginatedGroupList groupsList()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let nameIcontains: string; // (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.groupsList(nameIcontains, page);
```

### Parameters

| Name              | Type         | Description                                    | Notes                            |
| ----------------- | ------------ | ---------------------------------------------- | -------------------------------- |
| **nameIcontains** | [**string**] |                                                | (optional) defaults to undefined |
| **page**          | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined |

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

# **groupsPartialUpdate**

> Group groupsPartialUpdate()

### Example

```typescript
import { GroupsApi, Configuration, PatchedGroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; // (default to undefined)
let patchedGroupRequest: PatchedGroupRequest; // (optional)

const { status, data } = await apiInstance.groupsPartialUpdate(
  name,
  patchedGroupRequest,
);
```

### Parameters

| Name                    | Type                    | Description | Notes                 |
| ----------------------- | ----------------------- | ----------- | --------------------- |
| **patchedGroupRequest** | **PatchedGroupRequest** |             |                       |
| **name**                | [**string**]            |             | defaults to undefined |

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

# **groupsPermissionsCreate**

> Permission groupsPermissionsCreate(permissionRequest)

### Example

```typescript
import { GroupsApi, Configuration, PermissionRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)
let permissionRequest: PermissionRequest; //

const { status, data } = await apiInstance.groupsPermissionsCreate(
  name,
  permissionRequest,
);
```

### Parameters

| Name                  | Type                  | Description        | Notes                 |
| --------------------- | --------------------- | ------------------ | --------------------- |
| **permissionRequest** | **PermissionRequest** |                    |                       |
| **name**              | [**string**]          | Name of the group. | defaults to undefined |

### Return type

**Permission**

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

# **groupsPermissionsDeleteDestroy**

> groupsPermissionsDeleteDestroy()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsPermissionsDeleteDestroy(name);
```

### Parameters

| Name     | Type         | Description        | Notes                 |
| -------- | ------------ | ------------------ | --------------------- |
| **name** | [**string**] | Name of the group. | defaults to undefined |

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

# **groupsPermissionsDestroy**

> groupsPermissionsDestroy()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this permission. (default to undefined)
let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsPermissionsDestroy(id, name);
```

### Parameters

| Name     | Type         | Description                                         | Notes                 |
| -------- | ------------ | --------------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this permission. | defaults to undefined |
| **name** | [**string**] | Name of the group.                                  | defaults to undefined |

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

# **groupsPermissionsList**

> PaginatedPermissionList groupsPermissionsList()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.groupsPermissionsList(name, page);
```

### Parameters

| Name     | Type         | Description                                    | Notes                            |
| -------- | ------------ | ---------------------------------------------- | -------------------------------- |
| **name** | [**string**] | Name of the group.                             | defaults to undefined            |
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined |

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

# **groupsPermissionsPartialUpdate**

> Permission groupsPermissionsPartialUpdate()

### Example

```typescript
import { GroupsApi, Configuration, PatchedPermissionRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this permission. (default to undefined)
let name: string; //Name of the group. (default to undefined)
let patchedPermissionRequest: PatchedPermissionRequest; // (optional)

const { status, data } = await apiInstance.groupsPermissionsPartialUpdate(
  id,
  name,
  patchedPermissionRequest,
);
```

### Parameters

| Name                         | Type                         | Description                                         | Notes                 |
| ---------------------------- | ---------------------------- | --------------------------------------------------- | --------------------- |
| **patchedPermissionRequest** | **PatchedPermissionRequest** |                                                     |                       |
| **id**                       | [**number**]                 | A unique integer value identifying this permission. | defaults to undefined |
| **name**                     | [**string**]                 | Name of the group.                                  | defaults to undefined |

### Return type

**Permission**

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

# **groupsPermissionsRetrieve**

> Permission groupsPermissionsRetrieve()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this permission. (default to undefined)
let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsPermissionsRetrieve(id, name);
```

### Parameters

| Name     | Type         | Description                                         | Notes                 |
| -------- | ------------ | --------------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this permission. | defaults to undefined |
| **name** | [**string**] | Name of the group.                                  | defaults to undefined |

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

# **groupsPermissionsUpdate**

> Permission groupsPermissionsUpdate(permissionRequest)

### Example

```typescript
import { GroupsApi, Configuration, PermissionRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this permission. (default to undefined)
let name: string; //Name of the group. (default to undefined)
let permissionRequest: PermissionRequest; //

const { status, data } = await apiInstance.groupsPermissionsUpdate(
  id,
  name,
  permissionRequest,
);
```

### Parameters

| Name                  | Type                  | Description                                         | Notes                 |
| --------------------- | --------------------- | --------------------------------------------------- | --------------------- |
| **permissionRequest** | **PermissionRequest** |                                                     |                       |
| **id**                | [**number**]          | A unique integer value identifying this permission. | defaults to undefined |
| **name**              | [**string**]          | Name of the group.                                  | defaults to undefined |

### Return type

**Permission**

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

# **groupsRetrieve**

> Group groupsRetrieve()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.groupsRetrieve(name);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **name** | [**string**] |             | defaults to undefined |

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

# **groupsUpdate**

> Group groupsUpdate(groupRequest)

### Example

```typescript
import { GroupsApi, Configuration, GroupRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; // (default to undefined)
let groupRequest: GroupRequest; //

const { status, data } = await apiInstance.groupsUpdate(name, groupRequest);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **groupRequest** | **GroupRequest** |             |                       |
| **name**         | [**string**]     |             | defaults to undefined |

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

# **groupsUsersCreate**

> UserSlim groupsUsersCreate(userSlimRequest)

### Example

```typescript
import { GroupsApi, Configuration, UserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)
let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.groupsUsersCreate(
  name,
  userSlimRequest,
);
```

### Parameters

| Name                | Type                | Description        | Notes                 |
| ------------------- | ------------------- | ------------------ | --------------------- |
| **userSlimRequest** | **UserSlimRequest** |                    |                       |
| **name**            | [**string**]        | Name of the group. | defaults to undefined |

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

# **groupsUsersDeleteDestroy**

> groupsUsersDeleteDestroy()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsUsersDeleteDestroy(name);
```

### Parameters

| Name     | Type         | Description        | Notes                 |
| -------- | ------------ | ------------------ | --------------------- |
| **name** | [**string**] | Name of the group. | defaults to undefined |

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

# **groupsUsersDestroy**

> groupsUsersDestroy()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsUsersDestroy(id, name);
```

### Parameters

| Name     | Type         | Description                                   | Notes                 |
| -------- | ------------ | --------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this user. | defaults to undefined |
| **name** | [**string**] | Name of the group.                            | defaults to undefined |

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

# **groupsUsersList**

> PaginatedUserSlimList groupsUsersList()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let name: string; //Name of the group. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.groupsUsersList(name, page);
```

### Parameters

| Name     | Type         | Description                                    | Notes                            |
| -------- | ------------ | ---------------------------------------------- | -------------------------------- |
| **name** | [**string**] | Name of the group.                             | defaults to undefined            |
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined |

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

# **groupsUsersPartialUpdate**

> UserSlim groupsUsersPartialUpdate()

### Example

```typescript
import { GroupsApi, Configuration, PatchedUserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let name: string; //Name of the group. (default to undefined)
let patchedUserSlimRequest: PatchedUserSlimRequest; // (optional)

const { status, data } = await apiInstance.groupsUsersPartialUpdate(
  id,
  name,
  patchedUserSlimRequest,
);
```

### Parameters

| Name                       | Type                       | Description                                   | Notes                 |
| -------------------------- | -------------------------- | --------------------------------------------- | --------------------- |
| **patchedUserSlimRequest** | **PatchedUserSlimRequest** |                                               |                       |
| **id**                     | [**number**]               | A unique integer value identifying this user. | defaults to undefined |
| **name**                   | [**string**]               | Name of the group.                            | defaults to undefined |

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

# **groupsUsersRetrieve**

> UserSlim groupsUsersRetrieve()

### Example

```typescript
import { GroupsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let name: string; //Name of the group. (default to undefined)

const { status, data } = await apiInstance.groupsUsersRetrieve(id, name);
```

### Parameters

| Name     | Type         | Description                                   | Notes                 |
| -------- | ------------ | --------------------------------------------- | --------------------- |
| **id**   | [**number**] | A unique integer value identifying this user. | defaults to undefined |
| **name** | [**string**] | Name of the group.                            | defaults to undefined |

### Return type

**UserSlim**

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

# **groupsUsersUpdate**

> UserSlim groupsUsersUpdate(userSlimRequest)

### Example

```typescript
import { GroupsApi, Configuration, UserSlimRequest } from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let name: string; //Name of the group. (default to undefined)
let userSlimRequest: UserSlimRequest; //

const { status, data } = await apiInstance.groupsUsersUpdate(
  id,
  name,
  userSlimRequest,
);
```

### Parameters

| Name                | Type                | Description                                   | Notes                 |
| ------------------- | ------------------- | --------------------------------------------- | --------------------- |
| **userSlimRequest** | **UserSlimRequest** |                                               |                       |
| **id**              | [**number**]        | A unique integer value identifying this user. | defaults to undefined |
| **name**            | [**string**]        | Name of the group.                            | defaults to undefined |

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
