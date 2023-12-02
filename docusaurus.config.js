module.exports = {
  title: "Skytable",
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
    sidebar: {
      hideable: true,
    },
    tableOfContents: {
      maxHeadingLevel: 4,
    },
    prism: {
      additionalLanguages: [
        'bash',
        'json',
        'rust',
        'toml',
        'sql',
      ],
    },
    navbar: {
      title: "Skytable // Docs",
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
          dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
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
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.8',
              path: '/',
            }
          },
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
