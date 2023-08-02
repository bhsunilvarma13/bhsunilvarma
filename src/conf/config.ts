const config = {
  appwriteURL: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabase: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwriteCollection: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
  appwriteBucked: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
};

export default config;
