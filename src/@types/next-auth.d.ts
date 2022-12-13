import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      uid: string;
      email: string;
      name: string;
    }
  }
  interface User{
    username?: string | null;
  }
}

declare module "next-auth/jwt" {
interface JWT {
    uid:string;
    }
}