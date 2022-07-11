# Getting Started

## Requirements

- An omneo account is required to use this integration, if you don't have an account, you can get in touch at `hello@omneo.io`

The below can be obtained from your Omneo administrator

- Your omneo Tenant id, or Omneo API Url which contains your tenant id
- An Omneo API Bearer token
- The identity `handle` that will be used to search and link accounts in Omneo

## How to start if you want to try out the integration

1. Add the integration to your `middleware.config.js` your `identityHandle` will be different based on your ecommerce platform

```
module.exports = {
  integrations: {
    omneo: {
      location: '@omneo/omneo-vue-storefront-api/server',
      configuration: {
        api: {
          url: `https://api.${process.env.OMNEO_TENANT}.getomneo.com/`,
          token: process.env.OMNEO_TOKEN, 
          identityHandle: 'shopify'
        }
      }
    }, 
  }
};

```

2. That's it!

## How to start if you want to contribute?

Want to contribute? Ping us on `omneo` channel on [our Discord](https://discord.vuestorefront.io)!

