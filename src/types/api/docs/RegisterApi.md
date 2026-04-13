# RegisterApi

All URIs are relative to _http://localhost_

| Method                                | HTTP request            | Description |
| ------------------------------------- | ----------------------- | ----------- |
| [**registerCreate**](#registercreate) | **POST** /api/register/ |             |

# **registerCreate**

> UserRegistration registerCreate(userRegistrationRequest)

### Example

```typescript
import { RegisterApi, Configuration, UserRegistrationRequest } from './api';

const configuration = new Configuration();
const apiInstance = new RegisterApi(configuration);

let userRegistrationRequest: UserRegistrationRequest; //

const { status, data } = await apiInstance.registerCreate(
  userRegistrationRequest,
);
```

### Parameters

| Name                        | Type                        | Description | Notes |
| --------------------------- | --------------------------- | ----------- | ----- |
| **userRegistrationRequest** | **UserRegistrationRequest** |             |       |

### Return type

**UserRegistration**

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
