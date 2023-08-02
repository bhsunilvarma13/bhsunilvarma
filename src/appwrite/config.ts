// @ts-expect-error
import { Client, ID, Databases, Storage } from "appwrite";
import config from "@/conf/config";

const client = new Client()
  .setProject(config.appwriteProjectId)
  .setEndpoint(config.appwriteURL);

const databases = new Databases(client);
const storage = new Storage(client);

export { databases, storage };
