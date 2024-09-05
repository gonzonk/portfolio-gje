import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gonzalo Esparza's Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-gje/",
  themeConfig: {
    logo: '../../assets/images/lumaFavicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About", link: "/about.html"},
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/gonzonk" }],
  },
});
