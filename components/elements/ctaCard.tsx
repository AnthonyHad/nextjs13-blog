import directus from "@/lib/directus";
import { revalidateTag } from "next/cache";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const CTACard = async () => {
  const formAction = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      await directus.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscribers-count");
    } catch (error) {
      console.log(error);
    }
  };
  const subscribersCount = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
      next: {
        tags: ["subscribers-count"],
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.meta.total_count)
    .catch((error) => console.log(error));

  return (
    <div className=" relative rounded-md bg-slate-100 py-10 px-6 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* Image */}
      <Image
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        fill
        alt="CTA card image"
        className="object-center object-cover"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="text-4xl font-semibold mt-3">
          Explore the world with me!
        </h3>
        <p className="mt-2 text-lg max-w-lg">
          Explore the world with me! I'm travelling around the 🌍. I've visited
          most of the great cities and currentl am in the 🇪🇺 Join me!
        </p>
        {/* Form */}
        <form
          key={subscribersCount + "subscribers form"}
          action={formAction}
          className="mt-6 flex items-center gap-2 w-full "
        >
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            className="bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm w-full md:w-auto"
          />
          <button className="bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap">
            Sign Up
          </button>
        </form>
        {/* Subscribers */}
        <div className="mt-5 text-neutral-700 ">
          Join our{" "}
          <span className="bg-neutral-700 rounded-md text-neutral-100 py-1 px-2 text-sm">
            {" "}
            {subscribersCount}
          </span>{" "}
          subscribers now !
        </div>
      </div>
    </div>
  );
};

export default CTACard;
