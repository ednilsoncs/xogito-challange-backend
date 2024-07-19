export interface IRequestCreateUser {
  name: string;
  avatar_url: string;
  company: string;
  location: string;
  email: string | null;
  followers: number;
  following: number;
}
