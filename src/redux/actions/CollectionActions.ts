import axios from 'axios';
import { CollectionInterface } from '../../types/CollectionInterface';
import {
  requestFinished,
  requestStarted,
} from '../actions/RequestsLoadingActions';

export const setCollections = (collections: CollectionInterface[]) => ({
  type: 'SET_COLLECTIONS',
  payload: {
    collections,
  },
});

export const getCollections = () => {
  return function (dispatch) {
    dispatch(requestStarted('getCollections'));
    axios.get('/api/getCollections').then((res) => {
      dispatch(setCollections(res.data.collections));
      dispatch(requestFinished('getCollections'));
    });
  };
};

export const deleteCollection = (
  collections: CollectionInterface[],
  collectionId: string
) => {
  return function (dispatch) {
    axios.post('/api/deleteCollection', { id: collectionId }).then((res) => {
      dispatch(
        setCollections(collections.filter((e) => e.id !== res.data.result.id))
      );
    });
  };
};

export const updateCollections = (collections: CollectionInterface[]) => ({
  type: 'UPDATE_COLLECTIONS',
  payload: {
    collections,
  },
});

export const updateCollection = (collection: CollectionInterface) => ({
  type: 'UPDATE_COLLECTION',
  payload: {
    collection,
  },
});
