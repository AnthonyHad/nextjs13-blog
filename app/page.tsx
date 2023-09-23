import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import PostList from "@/components/post/postList";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
        />
      </main>
    </PaddingContainer>
  );
}
