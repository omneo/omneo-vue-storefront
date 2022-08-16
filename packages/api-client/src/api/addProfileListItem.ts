export async function addProfileListItem(context: {config: any, client: any}, token: string, handle: string, params: object): Promise<any> {

  const url = new URL(`/id/api/v1/profiles/me/lists/${handle}/items`, context.config.api.url);

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
    return Promise.reject(`Cannot add list item to list ${handle}`);
  });

  return data;
}
