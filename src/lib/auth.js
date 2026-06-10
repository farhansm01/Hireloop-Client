import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("hireloop");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  
  database: mongodbAdapter(db, { client }),
});