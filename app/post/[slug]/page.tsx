import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLink from "@/components/elements/socialLink";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostHero from "@/components/post/postHero";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return { slug: post.slug };
  });
};

const PostPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="mt-10 flex gap-10">
        <div className="relative">
          <div className="sticky top-20 flex flex-col gap-5">
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareURL
              platform="twitter"
              link={`https://twitter.com/intent/tweet?url=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
            <SocialLink
              isShareURL
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${
                "http://localhost:3000" + `/post/${post.slug}`
              }`}
            />
          </div>
        </div>
        <div className="h-[1000px] bg-slate-200 w-full">Post Body</div>
      </div>
    </PaddingContainer>
  );
};

export default PostPage;
