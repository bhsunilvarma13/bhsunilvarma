import { storage } from "@/appwrite/config";
import config from "@/conf/config";

export const getPostFile = async (FileID: string) => {
  const post = await storage.getFileView(config.appwriteBucked, FileID);

  return post;
};
