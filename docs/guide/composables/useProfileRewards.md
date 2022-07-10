# useProfileRewards

`useProfileRewards` is a custom composable which is responsible for loading and redeeming rewards against an authenticated Omneo profile

## API 

- `search()`
Hydrates the `rewards` object with the [Omneo rewards](https://omneo.readme.io/reference/indexprofilereward-1) data
- `redeem(amount)`
Used to redeem a selected amount from the profiles available Reward/Points balance
You can use `balance` and `checkBalance` in the `useProfile` composable to monitor the available amount that can be redeemed.
- `rewards`
An object containing the rewards
- `loading`
Denotes whether the useProfileRewards composable is loading
- `error`
An object containing errors for each of the methods described above