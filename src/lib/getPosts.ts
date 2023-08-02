import { databases } from "@/appwrite/config";
import config from "@/conf/config";

export const getPosts = async () => {
  const posts = await databases.listDocuments(
    config.appwriteDatabase,
    config.appwriteCollection
  );

  return posts.documents;
};
