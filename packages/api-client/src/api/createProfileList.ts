export async function createProfileList(context: {config: any, client: any}, token: string, params: object): Promise<any> {

  const url = new URL('/id/api/v1/profiles/me/lists', context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const body = {
    ...params
  };

  const {data: {data}} = await context.client.post(url.href, body, config).catch((error) => {
    console.log(error);
    return Promise.reject('Cannot create profile lists');
  });

  return data;
}
