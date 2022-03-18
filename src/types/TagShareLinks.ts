import { collection, User } from "@prisma/client";
export type CollectionShareLinks =
  | collection & {
      links: {
        title: string;
        url: string | null;
        collections: collection[];
        owner: User | null;
        modificationTimestamp: string;
      }[];
      share: {
        sharedWith: string[];
      }[];
    };
