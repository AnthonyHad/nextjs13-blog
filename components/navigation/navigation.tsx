import Link from "next/link";
import PaddingContainer from "../layout/paddingContainer";
import { getDictionary } from "@/lib/getDictionary";

const Navigation = async ({ locale }: { locale: string }) => {
  const dictionary = await getDictionary(locale);

  return (
    <div className="border-b sticky z-[999] top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md ">
      <PaddingContainer>
        <div className="py-5 flex items-center justify-between ">
          <Link className="text-lg font-bold" href={`/${locale}`}>
            Explorer
          </Link>
          <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href={`/${locale}/cities`}>
                  {dictionary.navigation.links.cities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>
                  {dictionary.navigation.links.experience}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
