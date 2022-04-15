export interface SuggestionInterface {
  id: string;
  value: string;
  type: "collection" | "link";
  url?: string;
}
