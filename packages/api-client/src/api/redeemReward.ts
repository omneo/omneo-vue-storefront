export async function redeemReward(context: {config: any, client: any}, token: string, amount: number): Promise<any> {

  const url = new URL('/id/api/v1/profiles/me/redeem', context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const body = {
    amount
  };

  let error;

  const {status, data: {data}} = await context.client.post(url.href, body, config).catch(({response}) => {
    error = response.data.errors || response.data.message;
    return response;
  });

  return {status, data, errors: error};
}
