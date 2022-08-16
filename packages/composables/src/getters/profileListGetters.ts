
type listType = { items: any, [key: string]: string| number }

function getListByHandle(lists: Array<listType>, handle: string): any {
  if (!Array.isArray(lists)) return {};
  return lists.find((l) => l.handle === handle);
}

function getListById(lists: Array<listType>, id: number): any {
  if (!Array.isArray(lists)) return {};
  return lists.find((l) => l.id === id);
}

function getListItemByBarcode(list: listType, barcode: string): any {
  if (!list) return {};
  return list.items.find((i) => i.product_variant && i.product_variant.barcode === barcode);
}

function getListItemBySKU(list: listType, sku: string): any {
  if (!list) return {};
  return list.items.find((i) => i.product_variant && i.product_variant.sku === sku);
}

function getListItemByExternalId(list: listType, externalId: string): any {
  if (!list) return {};
  return list.items.find((i) => i.product_variant && i.product_variant.external_id === externalId);
}

function getListItemsQuantity(list: listType): any {
  if (!list) return {};
  return list.items.reduce((total, item) => total += item.quantity, 0);
}

export const profileListGetters = {
  getListByHandle,
  getListById,
  getListItemByBarcode,
  getListItemBySKU,
  getListItemByExternalId,
  getListItemsQuantity
};
