# TokenApi

All URIs are relative to _http://localhost_

| Method                                            | HTTP request                   | Description |
| ------------------------------------------------- | ------------------------------ | ----------- |
| [**tokenBlacklistCreate**](#tokenblacklistcreate) | **POST** /api/token/blacklist/ |             |
| [**tokenCreate**](#tokencreate)                   | **POST** /api/token/           |             |
| [**tokenRefreshCreate**](#tokenrefreshcreate)     | **POST** /api/token/refresh/   |             |
| [**tokenVerifyCreate**](#tokenverifycreate)       | **POST** /api/token/verify/    |             |

# **tokenBlacklistCreate**

> tokenBlacklistCreate(tokenBlacklistRequest)

Takes a token and blacklists it. Must be used with the `rest_framework_simplejwt.token_blacklist` app installed.

### Example

```typescript
import { TokenApi, Configuration, TokenBlacklistRequest } from './api';

const configuration = new Configuration();
const apiInstance = new TokenApi(configuration);

let tokenBlacklistRequest: TokenBlacklistRequest; //

const { status, data } = await apiInstance.tokenBlacklistCreate(
  tokenBlacklistRequest,
);
```

### Parameters

| Name                      | Type                      | Description | Notes |
| ------------------------- | ------------------------- | ----------- | ----- |
| **tokenBlacklistRequest** | **TokenBlacklistRequest** |             |       |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenCreate**

> tokenCreate(tokenObtainPairRequest)

Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.

### Example

```typescript
import { TokenApi, Configuration, TokenObtainPairRequest } from './api';

const configuration = new Configuration();
const apiInstance = new TokenApi(configuration);

let tokenObtainPairRequest: TokenObtainPairRequest; //

const { status, data } = await apiInstance.tokenCreate(tokenObtainPairRequest);
```

### Parameters

| Name                       | Type                       | Description | Notes |
| -------------------------- | -------------------------- | ----------- | ----- |
| **tokenObtainPairRequest** | **TokenObtainPairRequest** |             |       |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenRefreshCreate**

> TokenRefresh tokenRefreshCreate(tokenRefreshRequest)

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```typescript
import { TokenApi, Configuration, TokenRefreshRequest } from './api';

const configuration = new Configuration();
const apiInstance = new TokenApi(configuration);

let tokenRefreshRequest: TokenRefreshRequest; //

const { status, data } =
  await apiInstance.tokenRefreshCreate(tokenRefreshRequest);
```

### Parameters

| Name                    | Type                    | Description | Notes |
| ----------------------- | ----------------------- | ----------- | ----- |
| **tokenRefreshRequest** | **TokenRefreshRequest** |             |       |

### Return type

**TokenRefresh**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenVerifyCreate**

> tokenVerifyCreate(tokenVerifyRequest)

Takes a token and indicates if it is valid. This view provides no information about a token\'s fitness for a particular use.

### Example

```typescript
import { TokenApi, Configuration, TokenVerifyRequest } from './api';

const configuration = new Configuration();
const apiInstance = new TokenApi(configuration);

let tokenVerifyRequest: TokenVerifyRequest; //

const { status, data } =
  await apiInstance.tokenVerifyCreate(tokenVerifyRequest);
```

### Parameters

| Name                   | Type                   | Description | Notes |
| ---------------------- | ---------------------- | ----------- | ----- |
| **tokenVerifyRequest** | **TokenVerifyRequest** |             |       |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: Not defined

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | No response body | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
