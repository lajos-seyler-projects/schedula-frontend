# PatchedUserPreferencesRequest

## Properties

| Name               | Type                                          | Description | Notes                             |
| ------------------ | --------------------------------------------- | ----------- | --------------------------------- |
| **date_format**    | [**DateFormatEnum**](DateFormatEnum.md)       |             | [optional] [default to undefined] |
| **decimal_format** | [**DecimalFormatEnum**](DecimalFormatEnum.md) |             | [optional] [default to undefined] |
| **time_zone**      | **string**                                    |             | [optional] [default to undefined] |
| **time_format**    | [**TimeFormatEnum**](TimeFormatEnum.md)       |             | [optional] [default to undefined] |
| **fiori_theme**    | [**FioriThemeEnum**](FioriThemeEnum.md)       |             | [optional] [default to undefined] |
| **show_timezone**  | **boolean**                                   |             | [optional] [default to undefined] |

## Example

```typescript
import { PatchedUserPreferencesRequest } from './api';

const instance: PatchedUserPreferencesRequest = {
  date_format,
  decimal_format,
  time_zone,
  time_format,
  fiori_theme,
  show_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
