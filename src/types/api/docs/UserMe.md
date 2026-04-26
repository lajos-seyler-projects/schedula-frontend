# UserMe

## Properties

| Name             | Type                    | Description                                                                      | Notes                             |
| ---------------- | ----------------------- | -------------------------------------------------------------------------------- | --------------------------------- |
| **username**     | **string**              |                                                                                  | [optional] [default to undefined] |
| **email**        | **string**              |                                                                                  | [optional] [default to undefined] |
| **first_name**   | **string**              |                                                                                  | [optional] [default to undefined] |
| **last_name**    | **string**              |                                                                                  | [optional] [default to undefined] |
| **is_superuser** | **boolean**             | Designates that this user has all permissions without explicitly assigning them. | [optional] [default to undefined] |
| **permissions**  | **Array&lt;string&gt;** |                                                                                  | [readonly] [default to undefined] |

## Example

```typescript
import { UserMe } from './api';

const instance: UserMe = {
  username,
  email,
  first_name,
  last_name,
  is_superuser,
  permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
