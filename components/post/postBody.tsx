import parse from "html-react-parser";
import Image from "next/image";
import { HTMLReactParserOptions, Element } from "html-react-parser";

const PostBody = ({ body }: { body: string }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="rounded-md w-full object-center object-cover my-3  max-h-[300px] md:max-h-[500px]"
              src={src}
              alt={alt}
              width={1280}
              height={620}
            />
          );
        }
      }
    },
  };

  const getParsedHtml = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParsedHtml(body)}</div>;
};

export default PostBody;
