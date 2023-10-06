import CTACard from "@/components/elements/ctaCard";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostList from "@/components/post/postList";
import { DUMMY_POSTS } from "@/DUMMY_DATA";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

export default async function Home() {
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

  console.log(posts);

  if (!posts) {
    notFound();
  }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
        />
        <CTACard />
        <PostCard reverse={true} post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
