"use client";
import getFormatDate from "@/lib/getFormatDate";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";
import { useEffect, useState } from "react";

function BlogSection() {
  const [content, setContent] = useState();

  const settingContent = async () => {
    const posts = await getPosts();
    setContent(
      posts.map((post: AppwriteDocument) => {
        return (
          <div className="my-4" key={post.$id}>
            <Link href={`/blog/${post.$id}`}>
              <h4 className="underline mb-0 font-normal">{post.title}</h4>
            </Link>
            <p className="mt-0 text-sm">{getFormatDate(post.date)}</p>
          </div>
        );
      })
    );
  };

  useEffect(() => {
    settingContent();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-medium">Blog</h1>
      {content}
    </div>
  );
}

export default BlogSection;
