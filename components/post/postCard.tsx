import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./postContent";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <Link
      className="grid grid-cols-2 gap-10 items-center"
      href={`/post/${post.slug}`}
    >
      {/* Post Image */}
      <Image
        className="rounded w-full object-cover object-center max-h-[300px]"
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      {/* Post Content */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
