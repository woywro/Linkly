import { CollectionInterface } from '../types/CollectionInterface';

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
};
