import { CollectionInterface } from '../types/CollectionInterface';

<<<<<<< HEAD
export const collectionsOrderHelper = (collections: CollectionInterface[]) => {
  const savedCollectionsOrder = JSON.parse(
    localStorage.getItem('collectionsOrder')
  );
  const arraysLinked = savedCollectionsOrder.concat(collections);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  const unique = getUniqueListBy(arraysLinked, 'id');
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
=======
interface lsCollection {
  index: number;
  id: string;
}

export const collectionsOrderHelper = (collections: CollectionInterface[]) => {
  const savedCollectionsOrder = JSON.parse(
    localStorage.getItem('collectionsOrder') || '{}'
  );
  const collectionsId = savedCollectionsOrder.map((e: lsCollection) => e.id);
  const sortedCollections = collections.sort(function (a, b) {
    return collectionsId.indexOf(a.id) - collectionsId.indexOf(b.id);
  });

  return sortedCollections;
>>>>>>> development
};
