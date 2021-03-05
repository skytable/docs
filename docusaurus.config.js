module.exports = {
  title: 'Skytable Documentation',
  tagline: "This is the place where you'll learn to use, install, configure and master Skytable",
  url: 'https://docs.skytable.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'skytable', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Skytable Documentation',
      logo: {
        alt: 'Skytable Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/skytable/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Docs',
              to: '/',
            },
            {
              label: 'Security Advisories',
              to: 'https://skybasedb.github.io/security',
            },
            {
              label: 'Releases',
              to: 'https://github.com/skytable/skytable/releases'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/skybasedb/community',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/QptWFdx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/onskybase',
            },
          ],
        },
        {
          title: 'Sources',
          items: [
            {
              label: 'Core database',
              href: 'https://github.com/skytable/skytable',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/skytable/docs',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/skytable/skytable/blob/next/AUTHORS.md">The Skytable Authors</a>. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.auto.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // 'docusaurus-plugin-auto-sidebars'
  ]
};
