import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Frohe Stunde Weroth",
  tagline: "Archiv aus 125 Jahren Männerchor",
  favicon: "img/Icon_Männerchor Frohe Stunde Weroth schwarz.png",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/archiv-frohe-stunde/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Frohe-Stunde-Weroth", // Usually your GitHub org/user name.
  projectName: "archiv-frohe-stunde", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Frohe-Stunde-Weroth/archiv-frohe-stunde/blob/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Frohe-Stunde-Weroth/archiv-frohe-stunde/blob/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: false,
        searchBarPosition: "left",
        language: "de",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Frohe Stunde Weroth",
      logo: {
        alt: "Logo Frohe Stunde Weroth",
        src: "img/logo_frohe_stunde_weroth_black.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "archivSidebar",
          position: "left",
          label: "Archiv",
        },
        {
          href: "https://www.frohe-stunde-weroth.de/bilder/",
          label: "Bilder",
          position: "left",
        },
        {
          href: "https://www.frohe-stunde-weroth.de/konzerte/",
          label: "Konzerte",
          position: "left",
        },
        {
          href: "https://www.frohe-stunde-weroth.de",
          label: "Webseite",
          position: "left",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Seiten",
          items: [
            {
              label: "Archiv",
              to: "/docs/archiv/intro",
            },
          ],
        },
        {
          title: "Soziale Medien",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/frohestundeweroth",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/results?search_query=Frohe+Stunde+Weroth",
            },
          ],
        },
        {
          title: "Rechtliches",
          items: [
            {
              label: "Impressum",
              href: "https://www.frohe-stunde-weroth.de/impressum/",
            },
            {
              label: "Datenschutz",
              href: "https://www.frohe-stunde-weroth.de/datenschutz/",
            },
            {
              label: "Kontakt",
              href: "https://www.frohe-stunde-weroth.de/kontakt/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Männerchor Frohe Stunde Weroth. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
