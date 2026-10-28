export type UserRole = "user" | "agent" | "admin";

export type PublicUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};
