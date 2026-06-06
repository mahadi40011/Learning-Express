export type Roles = "admin" | "moderator" | "user";

export const UserRoles = {
  admin: "admin",
  moderator: "moderator",
  user: "user",
} as const;
