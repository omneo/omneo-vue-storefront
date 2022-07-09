export async function updateProfileComms(context: {config: any, client: any}, token: string, payload: object): Promise<any> {

  const url = new URL('/id/api/v1/profiles/me/attributes/comms', context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const body = {
    ...payload
  };

  let error;

  const {status, data: {data}} = await context.client.put(url.href, body, config).catch(({response}) => {
    error = response.data.errors || response.data.message;
    return response;
  });

  return {status, data, errors: error};
}
