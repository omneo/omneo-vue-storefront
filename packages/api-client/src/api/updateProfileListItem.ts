export async function updateProfileListItem(context: {config: any, client: any}, token: string, handle: string, listItemId: number, params: object): Promise<any> {

  const url = new URL(`/id/api/v1/profiles/me/lists/${handle}/items/${listItemId}`, context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const body = {
    ...params
  };

  const {data: {data}} = await context.client.put(url.href, body, config).catch((error) => {
    console.log(error);
    return Promise.reject(`Cannot update list item ${listItemId} on list ${handle}`);
  });

  return data;
}
