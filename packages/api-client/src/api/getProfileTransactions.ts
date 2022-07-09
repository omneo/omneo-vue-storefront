export async function getProfileTransactions(context: {config: any, client: any}, token: string): Promise<any> {

  const url = new URL('/id/api/v1/profiles/me/transactions', context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  let error;

  const {status, data: {data}} = await context.client.get(url.href, config).catch(({response}) => {
    error = response.data.errors || response.data.message;
    return response;
  });

  return {status, data, errors: error};
}
