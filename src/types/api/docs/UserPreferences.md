# UserPreferences

## Properties

| Name                       | Type                                          | Description | Notes                             |
| -------------------------- | --------------------------------------------- | ----------- | --------------------------------- |
| **id**                     | **number**                                    |             | [readonly] [default to undefined] |
| **date_format**            | [**DateFormatEnum**](DateFormatEnum.md)       |             | [default to undefined]            |
| **date_format_display**    | **string**                                    |             | [readonly] [default to undefined] |
| **decimal_format**         | [**DecimalFormatEnum**](DecimalFormatEnum.md) |             | [default to undefined]            |
| **decimal_format_display** | **string**                                    |             | [readonly] [default to undefined] |
| **time_zone**              | **string**                                    |             | [default to undefined]            |
| **time_format**            | [**TimeFormatEnum**](TimeFormatEnum.md)       |             | [default to undefined]            |
| **time_format_display**    | **string**                                    |             | [readonly] [default to undefined] |
| **fiori_theme**            | [**FioriThemeEnum**](FioriThemeEnum.md)       |             | [default to undefined]            |
| **fiori_theme_display**    | **string**                                    |             | [readonly] [default to undefined] |
| **show_timezone**          | **boolean**                                   |             | [default to undefined]            |

## Example

```typescript
import { UserPreferences } from './api';

const instance: UserPreferences = {
  id,
  date_format,
  date_format_display,
  decimal_format,
  decimal_format_display,
  time_zone,
  time_format,
  time_format_display,
  fiori_theme,
  fiori_theme_display,
  show_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
