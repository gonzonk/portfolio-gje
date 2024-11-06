import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gonzalo Esparza's Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-gje/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "Assignments", link: "/assignments" },
      { text: "About", link: "/about.html" },
      { text: "Project", link: "/project" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Assignments",
        link: "/assignments"
      },
      {
        text: "Project",
        link: "/project"
      }
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/gonzonk" }],
  },
});
