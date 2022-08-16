# useProfileTiers

`useProfileTiers` is a custom composable which is responsible for loading and redeeming tiers against an authenticated Omneo profile

## API 

- `search()`
Hydrates the `tiers` object with the [Omneo tiers](https://omneo.readme.io/reference/showtier) data
- `tiers`
An object containing the tiers
- `loading`
Denotes whether the useProfileTiers composable is loading
- `error`
An object containing errors for each of the methods described above