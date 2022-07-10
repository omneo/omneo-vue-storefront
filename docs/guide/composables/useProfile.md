# useProfile

`useProfile` is a custom composable which is responsible for loading core Omneo profile data.
As well as providing the only method for authenticating a profile with `logIn` and `logOut`


## About `logIn` and `logOut`
Omneo should not be used to authenticate customers, as it does not offer authentication with username and password like an ecommerce platform like Shopify. Instead, Omneo should be initiated after a succesfull authentication has taken place. Following this, you can use `logIn` and provide an ID of the authenticated user. This should be done within SSR to control the ID being used.

`logIn` and `logOut` save a secure Omneo ID token to cookies, which is then disposed of during a `logOut`


## API 

- `logIn(identifier)`
This method attempts to find the user by the provided identifier.
For a user to be found, they must have a omneo `identity` that equals the provided value,
and matches the `handle` that matches the `identityHandle` configured in your `middleware.config.js`
If a profile match is found, all other requests using Omneo Composables will be performed using this profiles ID Token.

- `load()`
Hydrates the `profile` object with the [Omneo profile](https://omneo.readme.io/reference/showprofile) data
- `updateProfile(params)` 
A wrapper around the [Edit Profile](https://omneo.readme.io/reference/updateprofile) API endpoint. All data supported here can be passed as `params` to this composable, and will be used to update the profile data
- `updateProfileComms(params)`
Similar to `updateProfile` except specifically used to update comms prefererences against the profile. This can be a simpler way to update comms preferences against an Omneo profile. Refer to the [Comms Preferences](https://omneo.readme.io/reference/updateprofileattributecomms) API documentation for valid comms preferences to update
-`checkBalance()`
Check the Omneo profiles Total balance. This contains total Points and Rewards balance available for usage against the profile. This can be used to check the balance before redeeming a reward
- `profile`
The main profile object containing [Omneo Profile](https://omneo.readme.io/reference/showprofile) data
- `balance`
An object containing the profiles Omneo Reward/Point [balances](https://omneo.readme.io/reference/showprofilebalances)
- `loading`
Denotes whether the useProfile composable is loading
- `error`
An object containing errors for each of the methods described above