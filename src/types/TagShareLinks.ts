import { Collection, User } from "@prisma/client";
export type CollectionShareLinks =
  | Collection & {
      links: {
        title: string;
        url: string | null;
        collections: Collection[];
        owner: User | null;
        modificationTimestamp: string;
      }[];
      share: {
        sharedWith: string[];
      }[];
    };
