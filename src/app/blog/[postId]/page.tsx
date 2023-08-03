import { Metadata } from "next";
import { getPost } from "@/lib/getPost";
import getFormatDate from "@/lib/getFormatDate";
import { getPostFile } from "@/lib/getPostFile";
import BlogContent from "../../components/BlogContent";
import Link from "next/link";

type Params = {
  params: {
    postId: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const id = params.postId;

  const post = await getPost(id);

  return {
    title: `bhsunilvarma | ${post.title}`,
    description: `bhsunilvarma about ${post.title}`,
  };
}

async function PostPage({ params }: Params) {
  const id = params.postId;

  const postPromise = getPost(id);
  const filePromise = getPostFile(id);

  const post = await postPromise;

  return (
    <main className="max-w-2xl mx-auto p-8">
      <div>
        <h1 className="text-2xl font-light">{post.title}</h1>
        <p className="mt-0 text-sm font-light">{getFormatDate(post.date)}</p>
        <BlogContent filePromise={filePromise} />
        <Link href="/">
          <p className="font-light">← Back to home</p>
        </Link>
      </div>
    </main>
  );
}

export default PostPage;
