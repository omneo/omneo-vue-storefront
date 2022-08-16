# useProfileAggregations

`useProfileAggregations` is a custom composable which is responsible for loading aggregations against an authenticated Omneo profile

## API 

- `load()`
Hydrates the `aggregations` object with the [Omneo aggregations](https://omneo.readme.io/reference/indexaggregation) data
- `aggregations`
An object containing the aggregations
- `loading`
Denotes whether the useProfileAggregations composable is loading
- `error`
An object containing errors for each of the methods described above