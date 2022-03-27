enum type {
  link,
  collection,
}
export interface SuggestionInterface {
  id: string;
  value: string;
  type: type;
}
