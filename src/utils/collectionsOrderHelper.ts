import { CollectionInterface } from "../types/CollectionInterface";

export const collectionsOrderHelper = (collections: CollectionInterface[]) => {
  const savedCollectionsOrder = JSON.parse(
    localStorage.getItem("collectionsOrder")
  );
  const arraysLinked = savedCollectionsOrder.concat(collections);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  const unique = getUniqueListBy(arraysLinked, "id");
  const allCollections = () => {
    const collectionsSorted: CollectionInterface[] = [];
    unique.map((e) => {
      collections.map((x: CollectionInterface) => {
        if (e.id === x.id) {
          collectionsSorted.push(x);
        }
      });
    });
    return collectionsSorted;
  };
  return allCollections();
};
