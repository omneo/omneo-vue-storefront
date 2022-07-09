export async function getToken(context: {config: any, client: any}, identity: string): Promise<any> {
  const url = new URL('/id/api/v1/auth/token', context.config.api.url);
  const identityHandle = context.config.api.identityHandle;
  const omneoAPIToken = context.config.api.token;

  const config = {
    headers: {
      Authorization: `Bearer ${omneoAPIToken}`
    }
  };
  const body = {
    // eslint-disable-next-line camelcase
    id_handle: identityHandle,
    id: identity
  };

  const {data: {data}} = await context.client.post(url.href, body, config).catch((error) => {
    return Promise.reject(`Cannot get identity - ${error?.data?.message}`);
  });

  return data;
}
