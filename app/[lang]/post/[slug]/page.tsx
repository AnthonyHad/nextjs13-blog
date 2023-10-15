import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CTACard from "@/components/elements/ctaCard";
import SocialLink from "@/components/elements/socialLink";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostBody from "@/components/post/postBody";
import PostHero from "@/components/post/postHero";
import directus from "@/lib/directus";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  // return DUMMY_POSTS.map((post) => {
  //   return { slug: post.slug };
  // });
  try {
    const posts = await directus.items("post").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });

    const params = posts?.data?.map((post) => {
      return {
        slug: post.slug as string,
      };
    });

    return params || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching posts");
  }
};

const PostPage = async ({
  params,
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  // const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  const locale = params.lang;

  const getPostData = async () => {
    try {
      const post = await directus.items("post").readByQuery({
        filter: {
          slug: {
            _eq: params.slug,
          },
        },
        fields: [
          "*",
          "category.id",
          "category.title",
          "author.id",
          "author.first_name",
          "author.last_name",
        ],
      });

      return post?.data?.[0];
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const post = await getPostData();

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero locale={locale} post={post} />
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
        <CTACard locale={locale} />
      </div>
    </PaddingContainer>
  );
};

export default PostPage;
