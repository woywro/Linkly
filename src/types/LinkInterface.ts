import { CollectionInterface } from "./CollectionInterface";
import { UserInterface } from "./UserInterface";

export interface LinkInterface {
  id: string;
  title: string;
  url: string;
  ownerId: string;
  modificationTimestamp: string;
  collections?: CollectionInterface[];
  owner?: UserInterface;
}
