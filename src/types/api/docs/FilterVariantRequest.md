# FilterVariantRequest

## Properties

| Name                     | Type        | Description | Notes                             |
| ------------------------ | ----------- | ----------- | --------------------------------- |
| **table_id**             | **string**  |             | [default to undefined]            |
| **name**                 | **string**  |             | [default to undefined]            |
| **filters**              | **any**     |             | [optional] [default to undefined] |
| **exclude_filters**      | **any**     |             | [optional] [default to undefined] |
| **execute_on_selection** | **boolean** |             | [optional] [default to undefined] |
| **is_public**            | **boolean** |             | [optional] [default to undefined] |

## Example

```typescript
import { FilterVariantRequest } from './api';

const instance: FilterVariantRequest = {
  table_id,
  name,
  filters,
  exclude_filters,
  execute_on_selection,
  is_public,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
