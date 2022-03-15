import { Tag, User } from "@prisma/client";
export type TagShareLinks =
  | Tag & {
      links: {
        title: string;
        url: string | null;
        tags: Tag[];
        owner: User | null;
        modificationTimestamp: string;
      }[];
      share: {
        sharedWith: string[];
      }[];
    };
