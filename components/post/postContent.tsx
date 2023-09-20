import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className=" flex text-sm gap-2 items-center text-neutral-400">
        <div
          className={`font-medium ${
            post.category.title === "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2  h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2  h-2 rounded-full bg-neutral-200" />
        <div>1 min read</div>
        <div className="w-2  h-2 rounded-full bg-neutral-200" />
        <div>1 month ago</div>
      </div>
      {/* Title */}
      <h2 className="font-medium text-3xl">{post.title}</h2>
      <p className=" leading-snug text-neutral-600">{post.description}</p>
      {/* Read More */}
      <div className="flex items-center gap-2 pt-3">
        Read More <ArrowRight size="14" />
      </div>
    </div>
  );
};

export default PostContent;
