# useLocations

`useLocations` is a custom composable which is responsible for loading Omneo locations

## API 

- `load()`
Hydrates the `locations` object with the [Omneo locations](https://omneo.readme.io/reference/indexlocation-1) data
- `locations`
An object containing the locations
- `loading`
Denotes whether the useLocations composable is loading
- `error`
An object containing errors for each of the methods described above