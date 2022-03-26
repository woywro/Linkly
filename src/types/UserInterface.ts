import { User } from "@prisma/client";
export interface UserInterface {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}
