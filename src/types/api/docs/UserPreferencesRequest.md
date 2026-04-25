# UserPreferencesRequest

## Properties

| Name               | Type                                          | Description | Notes                  |
| ------------------ | --------------------------------------------- | ----------- | ---------------------- |
| **date_format**    | [**DateFormatEnum**](DateFormatEnum.md)       |             | [default to undefined] |
| **decimal_format** | [**DecimalFormatEnum**](DecimalFormatEnum.md) |             | [default to undefined] |
| **time_zone**      | **string**                                    |             | [default to undefined] |
| **time_format**    | [**TimeFormatEnum**](TimeFormatEnum.md)       |             | [default to undefined] |
| **fiori_theme**    | [**FioriThemeEnum**](FioriThemeEnum.md)       |             | [default to undefined] |
| **show_timezone**  | **boolean**                                   |             | [default to undefined] |

## Example

```typescript
import { UserPreferencesRequest } from './api';

const instance: UserPreferencesRequest = {
  date_format,
  decimal_format,
  time_zone,
  time_format,
  fiori_theme,
  show_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
