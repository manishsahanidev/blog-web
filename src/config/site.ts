type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Code Connect Blog",
  description: "High-Quality Blogs and Tutorials for Developers",
  url: "https://code-connect-blog.vercel.app/",
  ogImage: "https://code-connect-blog.vercel.app/og",
  links: {
    twitter: "https://x.com/manishsahanidev",
    github: "https://github.com/manishsahanidev/blog-web",
  },
};
