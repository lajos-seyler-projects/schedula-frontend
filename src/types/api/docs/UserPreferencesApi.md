# UserPreferencesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**userPreferencesDateFormatChoicesList**](#userpreferencesdateformatchoiceslist) | **GET** /api/user-preferences/date-format-choices | |
|[**userPreferencesDecimalFormatChoicesList**](#userpreferencesdecimalformatchoiceslist) | **GET** /api/user-preferences/decimal-format-choices | |
|[**userPreferencesFioriThemeChoicesList**](#userpreferencesfiorithemechoiceslist) | **GET** /api/user-preferences/fiori-theme-choices | |
|[**userPreferencesTimeFormatChoicesList**](#userpreferencestimeformatchoiceslist) | **GET** /api/user-preferences/time-format-choices | |

# **userPreferencesDateFormatChoicesList**
> Array<Choice> userPreferencesDateFormatChoicesList()


### Example

```typescript
import {
    UserPreferencesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPreferencesApi(configuration);

const { status, data } = await apiInstance.userPreferencesDateFormatChoicesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Choice>**

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

# **userPreferencesDecimalFormatChoicesList**
> Array<Choice> userPreferencesDecimalFormatChoicesList()


### Example

```typescript
import {
    UserPreferencesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPreferencesApi(configuration);

const { status, data } = await apiInstance.userPreferencesDecimalFormatChoicesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Choice>**

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

# **userPreferencesFioriThemeChoicesList**
> Array<Choice> userPreferencesFioriThemeChoicesList()


### Example

```typescript
import {
    UserPreferencesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPreferencesApi(configuration);

const { status, data } = await apiInstance.userPreferencesFioriThemeChoicesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Choice>**

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

# **userPreferencesTimeFormatChoicesList**
> Array<Choice> userPreferencesTimeFormatChoicesList()


### Example

```typescript
import {
    UserPreferencesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserPreferencesApi(configuration);

const { status, data } = await apiInstance.userPreferencesTimeFormatChoicesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Choice>**

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

