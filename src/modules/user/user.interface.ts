export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "moderator" | "user";
  age: number;
  is_active?: boolean;
}
