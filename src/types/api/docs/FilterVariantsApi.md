# FilterVariantsApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                                     | Description |
| --------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**filterVariantsCreate**](#filtervariantscreate)               | **POST** /api/filter-variants/                   |             |
| [**filterVariantsDefaultUpdate**](#filtervariantsdefaultupdate) | **PUT** /api/filter-variants/{table_id}/default/ |             |
| [**filterVariantsDestroy**](#filtervariantsdestroy)             | **DELETE** /api/filter-variants/{uuid}/          |             |
| [**filterVariantsList**](#filtervariantslist)                   | **GET** /api/filter-variants/                    |             |
| [**filterVariantsPartialUpdate**](#filtervariantspartialupdate) | **PATCH** /api/filter-variants/{uuid}/           |             |
| [**filterVariantsRetrieve**](#filtervariantsretrieve)           | **GET** /api/filter-variants/{uuid}/             |             |
| [**filterVariantsUpdate**](#filtervariantsupdate)               | **PUT** /api/filter-variants/{uuid}/             |             |

# **filterVariantsCreate**

> FilterVariant filterVariantsCreate(filterVariantRequest)

### Example

```typescript
import { FilterVariantsApi, Configuration, FilterVariantRequest } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let filterVariantRequest: FilterVariantRequest; //

const { status, data } =
  await apiInstance.filterVariantsCreate(filterVariantRequest);
```

### Parameters

| Name                     | Type                     | Description | Notes |
| ------------------------ | ------------------------ | ----------- | ----- |
| **filterVariantRequest** | **FilterVariantRequest** |             |       |

### Return type

**FilterVariant**

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

# **filterVariantsDefaultUpdate**

> FilterVariant filterVariantsDefaultUpdate(filterVariantRequest)

### Example

```typescript
import { FilterVariantsApi, Configuration, FilterVariantRequest } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let tableId: string; // (default to undefined)
let filterVariantRequest: FilterVariantRequest; //

const { status, data } = await apiInstance.filterVariantsDefaultUpdate(
  tableId,
  filterVariantRequest,
);
```

### Parameters

| Name                     | Type                     | Description | Notes                 |
| ------------------------ | ------------------------ | ----------- | --------------------- |
| **filterVariantRequest** | **FilterVariantRequest** |             |                       |
| **tableId**              | [**string**]             |             | defaults to undefined |

### Return type

**FilterVariant**

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

# **filterVariantsDestroy**

> filterVariantsDestroy()

### Example

```typescript
import { FilterVariantsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let uuid: string; //A UUID string identifying this Filter Variant. (default to undefined)

const { status, data } = await apiInstance.filterVariantsDestroy(uuid);
```

### Parameters

| Name     | Type         | Description                                    | Notes                 |
| -------- | ------------ | ---------------------------------------------- | --------------------- |
| **uuid** | [**string**] | A UUID string identifying this Filter Variant. | defaults to undefined |

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

# **filterVariantsList**

> Array<FilterVariant> filterVariantsList()

### Example

```typescript
import { FilterVariantsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let tableId: string; // (default to undefined)
let uuid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.filterVariantsList(tableId, uuid);
```

### Parameters

| Name        | Type         | Description | Notes                            |
| ----------- | ------------ | ----------- | -------------------------------- |
| **tableId** | [**string**] |             | defaults to undefined            |
| **uuid**    | [**string**] |             | (optional) defaults to undefined |

### Return type

**Array<FilterVariant>**

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

# **filterVariantsPartialUpdate**

> FilterVariant filterVariantsPartialUpdate()

### Example

```typescript
import {
  FilterVariantsApi,
  Configuration,
  PatchedFilterVariantRequest,
} from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let uuid: string; //A UUID string identifying this Filter Variant. (default to undefined)
let patchedFilterVariantRequest: PatchedFilterVariantRequest; // (optional)

const { status, data } = await apiInstance.filterVariantsPartialUpdate(
  uuid,
  patchedFilterVariantRequest,
);
```

### Parameters

| Name                            | Type                            | Description                                    | Notes                 |
| ------------------------------- | ------------------------------- | ---------------------------------------------- | --------------------- |
| **patchedFilterVariantRequest** | **PatchedFilterVariantRequest** |                                                |                       |
| **uuid**                        | [**string**]                    | A UUID string identifying this Filter Variant. | defaults to undefined |

### Return type

**FilterVariant**

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

# **filterVariantsRetrieve**

> FilterVariant filterVariantsRetrieve()

### Example

```typescript
import { FilterVariantsApi, Configuration } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let uuid: string; //A UUID string identifying this Filter Variant. (default to undefined)

const { status, data } = await apiInstance.filterVariantsRetrieve(uuid);
```

### Parameters

| Name     | Type         | Description                                    | Notes                 |
| -------- | ------------ | ---------------------------------------------- | --------------------- |
| **uuid** | [**string**] | A UUID string identifying this Filter Variant. | defaults to undefined |

### Return type

**FilterVariant**

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

# **filterVariantsUpdate**

> FilterVariant filterVariantsUpdate(filterVariantRequest)

### Example

```typescript
import { FilterVariantsApi, Configuration, FilterVariantRequest } from './api';

const configuration = new Configuration();
const apiInstance = new FilterVariantsApi(configuration);

let uuid: string; //A UUID string identifying this Filter Variant. (default to undefined)
let filterVariantRequest: FilterVariantRequest; //

const { status, data } = await apiInstance.filterVariantsUpdate(
  uuid,
  filterVariantRequest,
);
```

### Parameters

| Name                     | Type                     | Description                                    | Notes                 |
| ------------------------ | ------------------------ | ---------------------------------------------- | --------------------- |
| **filterVariantRequest** | **FilterVariantRequest** |                                                |                       |
| **uuid**                 | [**string**]             | A UUID string identifying this Filter Variant. | defaults to undefined |

### Return type

**FilterVariant**

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
