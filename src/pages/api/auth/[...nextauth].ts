import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/userSchema';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('should require credentials');
        }
        connectMongo().catch(error => ({ error: 'Connection Failed...!' }));
        // check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user Found with Email Please Sign Up...!');
        }

        // compare()
        const checkPassword = await compare(credentials.password, result.password);

        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }
        return result;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.name = user.name || user.username;
        token.uid = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name!;
      session.user.uid = token.uid;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
});
