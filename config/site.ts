export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyIn: string;
  socialLinks: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely  travel blog which shares experiences and cities around the world",
  currentlyIn: "Paris",
  socialLinks: {
    twitter: "https://twitter.com/anthonyhadwan_",
    github: "https://github.com/AnthonyHad",
    linkedin: "https://www.linkedin.com/in/anthonyhadwan/",
  },
};

export default siteConfig;
