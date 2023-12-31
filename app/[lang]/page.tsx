import CTACard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostList from "@/components/post/postList";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const locale = params.lang;
  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
        ],
      });
      return posts.data;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  if (!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard locale={locale} post={posts[0]} />
        <PostList
          locale={locale}
          posts={posts.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard locale={locale} />
        <PostCard locale={locale} reverse={true} post={posts[3]} />
        <PostList
          locale={locale}
          posts={posts.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
