import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/paddingContainer";
import PostList from "@/components/post/postList";
import directus from "@/lib/directus";
import { Post } from "@/types/collection";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  // return DUMMY_CATEGORIES.map((category) => {
  //   return {
  //     category: category.slug,
  //   };
  // });

  // Generate Metadata

  try {
    const categories = await directus.items("category").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });

    const params = categories?.data?.map((category) => {
      return {
        category: category.slug as string,
      };
    });

    return params || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching categories");
  }
};

const CategoryPage = async ({
  params,
}: {
  params: {
    category: string;
    lang: string;
  };
}) => {
  // const category = DUMMY_CATEGORIES.find(
  //   (category) => category.slug === params.category
  // );
  // const posts = DUMMY_POSTS.filter(
  //   (post) => post.category.title.toLocaleLowerCase() === params.category
  // );
  const locale = params.lang;

  const getCategoryData = async () => {
    try {
      const category = await directus.items("category").readByQuery({
        filter: {
          slug: {
            _eq: params.category,
          },
        },
        fields: [
          "*",
          "posts.*",
          "posts.author.id",
          "posts.author.first_name",
          "posts.author.last_name",
          "posts.category.id",
          "posts.category.title",
        ],
      });
      return category?.data?.[0];
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching category");
    }
  };

  const category = await getCategoryData();

  if (!category) {
    notFound();
  }

  const typeCorrectedCategory = category as unknown as {
    id: string;
    title: string;
    description: string;
    slug: string;
    posts: Post[];
  };

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">
          {typeCorrectedCategory?.title}
        </h1>
        <p className="text-lg text-neutral-600">
          {typeCorrectedCategory?.description}
        </p>
      </div>
      <PostList locale={locale} posts={typeCorrectedCategory.posts} />
    </PaddingContainer>
  );
};

export default CategoryPage;
