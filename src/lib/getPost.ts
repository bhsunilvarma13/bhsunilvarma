import { databases } from "@/appwrite/config";
import config from "@/conf/config";

export const getPost = async (docID: string) => {
  const post: AppwriteDocument = await databases.getDocument(
    config.appwriteDatabase,
    config.appwriteCollection,
    docID
  );

  return post;
};
