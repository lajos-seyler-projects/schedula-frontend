# FilterVariant

## Properties

| Name                     | Type        | Description | Notes                             |
| ------------------------ | ----------- | ----------- | --------------------------------- |
| **uuid**                 | **string**  |             | [readonly] [default to undefined] |
| **table_id**             | **string**  |             | [default to undefined]            |
| **name**                 | **string**  |             | [default to undefined]            |
| **slug**                 | **string**  |             | [readonly] [default to undefined] |
| **filters**              | **any**     |             | [optional] [default to undefined] |
| **exclude_filters**      | **any**     |             | [optional] [default to undefined] |
| **is_default**           | **boolean** |             | [readonly] [default to undefined] |
| **execute_on_selection** | **boolean** |             | [optional] [default to undefined] |
| **is_public**            | **boolean** |             | [optional] [default to undefined] |
| **created_by**           | **number**  |             | [readonly] [default to undefined] |

## Example

```typescript
import { FilterVariant } from './api';

const instance: FilterVariant = {
  uuid,
  table_id,
  name,
  slug,
  filters,
  exclude_filters,
  is_default,
  execute_on_selection,
  is_public,
  created_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
