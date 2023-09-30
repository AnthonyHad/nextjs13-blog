import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/ctaCard";
import SocialLink from "@/components/elements/socialLink";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostBody from "@/components/post/postBody";
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
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
        {/* Post body and social share */}
        <div className=" flex gap-10 flex-col md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex flex-col gap-5 md:flex-col items-center">
              <div className="font-medium md:hidden">Share this content:</div>
              <SocialLink
                isShareURL
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
              <SocialLink
                isShareURL
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        {/* CTA Card */}
        <CTACard />
      </div>
    </PaddingContainer>
  );
};

export default PostPage;
