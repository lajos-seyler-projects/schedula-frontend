# FilterDefinition

## Properties

| Name                | Type        | Description | Notes                             |
| ------------------- | ----------- | ----------- | --------------------------------- |
| **id**              | **number**  |             | [readonly] [default to undefined] |
| **name**            | **string**  |             | [default to undefined]            |
| **label**           | **string**  |             | [default to undefined]            |
| **query_parameter** | **string**  |             | [default to undefined]            |
| **required**        | **boolean** |             | [optional] [default to undefined] |
| **is_visible**      | **boolean** |             | [readonly] [default to undefined] |

## Example

```typescript
import { FilterDefinition } from './api';

const instance: FilterDefinition = {
  id,
  name,
  label,
  query_parameter,
  required,
  is_visible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
