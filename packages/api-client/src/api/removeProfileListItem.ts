export async function removeProfileListItem(context: {config: any, client: any}, token: string, handle: string, listItemId: number): Promise<any> {

  const url = new URL(`/id/api/v1/profiles/me/lists/${handle}/items/${listItemId}`, context.config.api.url);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const {data: {data}} = await context.client.delete(url.href, config).catch((error) => {
    console.log(error);
    return Promise.reject(`Cannot remove list item ${listItemId} on list ${handle}`);
  });

  return data;
}
