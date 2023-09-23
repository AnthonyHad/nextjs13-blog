import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const CTACard = () => {
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
        <form className="mt-6 flex items-center gap-2 ">
          <input
            placeholder="Write your email"
            className="bg-white/80 text-base rounded-md py-2 px-3 outline-none focus:ring-2 ring-neutral-600 placeholder:text-sm"
          />
          <button className="bg-neutral-900 rounded-md py-2 px-3 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
