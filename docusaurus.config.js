module.exports = {
  title: 'Skybase Documentation',
  tagline: "This is the place where you'll learn to use, install, configure and master Skybase",
  url: 'https://skybasedb.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'skybasedb', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Skybase Documentation',
      logo: {
        alt: 'Skybase Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/skybasedb/docs',
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
              to: 'https://github.com/skybasedb/skybase/releases'
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
              href: 'https://github.com/skybasedb/skybase',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/skybasedb/docs',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/skybasedb/skybase/blob/next/AUTHORS.md">The Skybase Authors</a>. All rights reserved.`,
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
