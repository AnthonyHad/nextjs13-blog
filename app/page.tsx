import PaddingContainer from "@/components/layout/paddingContainer";
import PostCard from "@/components/post/postCard";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_POSTS[0]} />
      </main>
    </PaddingContainer>
  );
}
