export const COUCHBASE_CONNECT_OPTIONS = 'COUCHBASE_CONNECT_OPTIONS';
export const COUCHBASE_CONNECTION = 'COUCHBASE_CONNECTION';
export const KEY_GENERATOR = ({ metadata, id }) => `${metadata.type}::${id}`;
export const PRICING_COLLECTIONS = {
  PRICE: 'prices',
  ALLOTMENT: 'allotments',
};
export const PRICING_MODELS = {
  PRICE: 'prices',
  ALLOTMENT: 'allotments',
};
