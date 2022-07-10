# useTransactions

`useTransactions` is a custom composable which is responsible for loading transactions against an authenticated Omneo profile

## API 
- `search()`
Hydrates the `transactions` object with the [Omneo transactions](https://omneo.readme.io/reference/indexprofiletransaction)
- `transactions`
An object containing the transactions
- `loading`
Denotes whether the useTransactions composable is loading
- `error`
An object containing errors for each of the methods described above