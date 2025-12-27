import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config()

export const auth = betterAuth({
  plugins: [expo()],
  database: new Pool({
    connectionString: process.env.DATABASE_URL
  }),
  baseUrl: 'https://authserver-qxzg.onrender.com',
  socialProviders: {
    google: {
      clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: ["myapp://"],
});