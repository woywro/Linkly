import { SharedWithYouInterface } from "./SharedWithYouInterface";
import { UserInterface } from "./UserInterface";
export interface ShareRequestInterface {
  id: string;
  isAccepted: boolean;
  collection: string;
  createdTimestamp: string;
  owner: UserInterface;
  receiver: UserInterface;
  receiverEmail: string;
}
