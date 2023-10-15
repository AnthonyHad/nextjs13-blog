import siteConfig from "@/config/site";
import PaddingContainer from "../layout/paddingContainer";
import Link from "next/link";
import SocialLink from "../elements/socialLink";
import { getDictionary } from "@/lib/getDictionary";

const Footer = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);
  return (
    <div className="py-8 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-neutral-700 text-lg">
            {dictionary.footer.description}
          </p>
          <div className="mt-6 flex justify-between gap-4 flex-wrap">
            <div>
              <div className=" text-lg font-medium">#exploretheworld</div>
              <div className="flex items center gap-3 mt-2 text-neutral-600">
                <SocialLink
                  link={siteConfig.socialLinks.twitter}
                  platform="twitter"
                />
                <SocialLink
                  link={siteConfig.socialLinks.github}
                  platform="github"
                />
                <SocialLink
                  link={siteConfig.socialLinks.linkedin}
                  platform="linkedin"
                />
              </div>
            </div>
            <div>
              <div className="text-sm text-neutral-400">
                {dictionary.footer.currentlyAtText}
              </div>
              <div className="bg-white shadow-md rounded-md px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                {siteConfig.currentlyIn}
              </div>
            </div>
          </div>
          <div className="border-t py-3 flex items-center gap-4 flex-wrap justify-between mt-16 ">
            <div className="text-sm text-neutral-400">
              {dictionary.footer.rightsText} {new Date().getFullYear()}
            </div>
            <div className="text-sm">
              {dictionary.footer.creatorText}{" "}
              <Link
                className="underline underline-offset-4"
                href="https://twitter.com/anthonyhadwan_"
              >
                Antho
              </Link>
            </div>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
