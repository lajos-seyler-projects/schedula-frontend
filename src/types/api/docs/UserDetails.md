# UserDetails

## Properties

| Name             | Type        | Description                                                                      | Notes                             |
| ---------------- | ----------- | -------------------------------------------------------------------------------- | --------------------------------- |
| **uuid**         | **string**  |                                                                                  | [readonly] [default to undefined] |
| **username**     | **string**  |                                                                                  | [default to undefined]            |
| **email**        | **string**  |                                                                                  | [default to undefined]            |
| **first_name**   | **string**  |                                                                                  | [optional] [default to undefined] |
| **last_name**    | **string**  |                                                                                  | [optional] [default to undefined] |
| **is_superuser** | **boolean** | Designates that this user has all permissions without explicitly assigning them. | [optional] [default to undefined] |
| **date_joined**  | **string**  |                                                                                  | [optional] [default to undefined] |
| **last_login**   | **string**  |                                                                                  | [optional] [default to undefined] |

## Example

```typescript
import { UserDetails } from './api';

const instance: UserDetails = {
  uuid,
  username,
  email,
  first_name,
  last_name,
  is_superuser,
  date_joined,
  last_login,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
