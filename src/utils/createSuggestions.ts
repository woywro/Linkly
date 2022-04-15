import { LinkInterface } from "../types/LinkInterface";
import { CollectionInterface } from "../types/CollectionInterface";
import { SuggestionInterface } from "../types/SuggestionInterface";

export const createSuggestions = (
  links: LinkInterface[],
  collections: CollectionInterface[]
): SuggestionInterface[] => {
  const linkSuggestions: SuggestionInterface[] = links.map(
    (link: LinkInterface) => {
      return {
        id: link.id,
        value: link.title,
        type: "link",
        url: link.url,
      };
    }
  );
  const collectionSuggestions: SuggestionInterface[] = collections.map(
    (collection: CollectionInterface) => {
      return {
        id: collection.id,
        value: collection.value,
        type: "collection",
      };
    }
  );
  const allSuggestions: SuggestionInterface[] = linkSuggestions.concat(
    collectionSuggestions
  );

  return allSuggestions;
};
