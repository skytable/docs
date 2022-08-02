module.exports = {
  title: "Skytable Documentation",
  tagline:
    "This is the place where you'll learn to use, install, configure and master Skytable",
  url: "https://docs.skytable.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "skytable",
  projectName: "docs",
  themeConfig: {
    tableOfContents: {
      maxHeadingLevel: 4,
    },
    prism: {
      additionalLanguages: ["toml", "rust"],
    },
    navbar: {
      title: "Skytable Documentation",
      logo: {
        alt: "Skytable Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://skytable.io",
          label: "Homepage",
          position: "right",
        },
        {
          href: "https://github.com/skytable/skytable",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Homepage",
              to: "https://skytable.io",
            },
            {
              label: "Docs",
              to: "/",
            },
            {
              label: "Security Advisories",
              to: "https://skytable.github.io/security",
            },
            {
              label: "Releases",
              to: "https://github.com/skytable/skytable/releases",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Gitter",
              href: "https://gitter.im/skytable/community",
            },
            {
              label: "Discord",
              href: "https://discord.gg/QptWFdx",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/skytabledb",
            },
          ],
        },
        {
          title: "Sources",
          items: [
            {
              label: "Core database",
              href: "https://github.com/skytable/skytable",
            },
            {
              label: "Documentation",
              href: "https://github.com/skytable/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/skytable/skytable/blob/next/AUTHORS.md">The Skytable Authors</a>. All rights reserved.`,
    },
    algolia: {
      apiKey: "07040e0073a0b6b216f6619396984190",
      indexName: "skytable",
      contextualSearch: true,
      appId: "BH4D9OD16A",
      searchParameters: {},
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    // 'docusaurus-plugin-auto-sidebars'
  ],
};
