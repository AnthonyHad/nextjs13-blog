import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./postContent";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <Link
      className={` ${
        layout === "horizontal"
          ? "grid grid-cols-2 gap-10 items-center"
          : "space-y-10"
      }`}
      href={`/post/${post.slug}`}
    >
      {/* Post Image */}
      <Image
        className={`${
          reverse ? "order-last" : ""
        }rounded w-full object-cover object-center max-h-[300px]`}
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
