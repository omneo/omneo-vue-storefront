import type { Transaction } from '@vue-storefront/omneo-api/src/types';

function getTransactedDate(transaction: Transaction): Date {
  return transaction?.transacted_at;
}

function getTransactionCurrency(transaction: Transaction): string {
  return transaction?.currency || '';
}

function getTransactionTags(transaction: Transaction): Date {
  return transaction?.transacted_at;
}

function getTransactionLocationName(transaction: Transaction): string {
  return transaction?.location?.name || '';
}

function getTransactionTotal(transaction: Transaction): number {
  return transaction?.total;
}

function getTransactionTotalOriginal(transaction: Transaction): number {
  return transaction?.total_original;
}

function getTransactionTimezone(transaction: Transaction): string {
  return transaction?.total || '';
}

function getTransactionReceiptRef(transaction: Transaction): string {
  return transaction?.receipt_ref || '';
}

export const profileTransactionGetters = {
  getTransactedDate,
  getTransactionCurrency,
  getTransactionTags,
  getTransactionLocationName,
  getTransactionTotal,
  getTransactionTotalOriginal,
  getTransactionTimezone,
  getTransactionReceiptRef
};
