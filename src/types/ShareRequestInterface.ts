import { CollectionInterface } from "./CollectionInterface";
import { UserInterface } from "./UserInterface";
export interface ShareRequestInterface {
  id: string;
  isAccepted: boolean;
  collection: CollectionInterface;
  createdTimestamp: string;
  owner: UserInterface;
  receiver: UserInterface;
  receiverEmail: string;
}
