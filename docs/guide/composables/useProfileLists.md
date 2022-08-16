# useProfileLists

`useProfileLists` is a custom composable which is responsible for loading Omneo locations

## API 

- `search()`
Hydrates the `lists` object with the [Omneo lists](https://omneo.readme.io/reference/indexlists) data
- `createList(params)`
Creates a new omneo list, which is a wrapper around
params: [Create List](https://omneo.readme.io/reference/createlist)
- `updateList(handle, params)`
Updates the data on an existing list 
params: [Update List](https://omneo.readme.io/reference/updatelist)
- `addListItem(handle, params)`
Adds an item to a list using the 
handle: The handle of the list to add the item to
params: [Lists API](https://omneo.readme.io/reference/createlistitem)
- `updateListItem(handle, listItemId)`
Update an item on a list (typically used to update quantity) [Update list item](https://omneo.readme.io/reference/updatelistitem)
- `removeListItem(handle, listItemId)`
Remove a list item
- `lists`
An object containing the lists
- `loading`
Denotes whether the useProfileLists composable is loading
- `error`
An object containing errors for each of the methods described above