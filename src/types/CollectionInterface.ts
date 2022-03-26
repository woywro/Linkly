import { Collection } from "@prisma/client";
import { LinkInterface } from "./LinkInterface";
import { UserInterface } from "./UserInterface";

export interface CollectionInterface {
  id: string;
  value: string;
  valId: string;
  ownerId: string;
  links?: LinkInterface[];
  owner?: UserInterface;
}
