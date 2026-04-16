# UserSlimRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**first_name** | **string** |  | [optional] [default to undefined]
**last_name** | **string** |  | [optional] [default to undefined]
**is_superuser** | **boolean** | Designates that this user has all permissions without explicitly assigning them. | [optional] [default to undefined]

## Example

```typescript
import { UserSlimRequest } from './api';

const instance: UserSlimRequest = {
    username,
    email,
    first_name,
    last_name,
    is_superuser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
