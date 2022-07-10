# useBenefits

`useBenefits` is a custom composable which is responsible for loading benefits against an authenticated Omneo profile

## API 

- `search()`
Hydrates the `benefits` object with the [Omneo benefits](https://omneo.readme.io/reference/indexprofilebenefit-1) data
- `benefits`
An object containing the benefits
- `loading`
Denotes whether the useBenefits composable is loading
- `error`
An object containing errors for each of the methods described above