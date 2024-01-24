// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kalify Inc. - Comunidade Brasileira de Programação',
  tagline: 'Uma introdução ao código aberto e orientação no processo de contribuição para projetos.',
  favicon: 'https://github.com/kalifyinc.png',

  // Set the production url of your site here
  url: 'https://kalify.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yagasaki7k', // Usually your GitHub org/user name.
  projectName: 'website-kalify', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yagasaki7k/website-kalify',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yagasaki7k/website-kalify',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://kalify.vercel.app/assets/images/pic07-786139e99d211ae24b327bfe5731a0ae.png',
      navbar: {
        title: 'Kalify - Open Source',
        logo: {
          alt: 'Kalify - Open Source',
          src: 'https://github.com/kalifyinc.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: 'https://yagasaki.dev/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/yagasaki7k/website-kalify',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://chat.whatsapp.com/KOgletvhYCvFIpuo9SNgGJ',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/jhSepmE7nN',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/kalifyinc',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: 'https://yagasaki.dev/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yagasaki7k/website-kalify',
              },
            ],
          },
        ],
        copyright: `Copyright © 2018 - ${new Date().getFullYear()} Kalify, Inc. Built with Docusaurus.`,
      }
    }),
};

module.exports = config;
