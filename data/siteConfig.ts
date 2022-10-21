import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://nitsanbaleli.github.io/nextjs-blog",
  siteName: "Nitsan Baleli",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "./og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/NitsanBaleli",
    twitter: "https://twitter.com/nbaleli",
    linkedin: "https://www.linkedin.com/in/nbaleli",
  },
};
export default siteConfig;
