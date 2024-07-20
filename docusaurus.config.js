// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const title = "tsk"
const tagline = "A task-runner and build tool for simpletons."

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: title,
  tagline: tagline,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://notnmeyer.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/tsk-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'notnmeyer', // Usually your GitHub org/user name.
  projectName: 'tsk-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/notnmeyer/tsk-docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: title,
        logo: {
          alt: `${title} logo`,
          src: 'img/tsk.png',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'installation',
            label: 'Installation',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'usage',
            label: 'Usage',
          },
          {
            href: 'https://github.com/notnmeyer/tsk',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/notnmeyer/tsk/issues',
            label: 'Issues',
            position: 'right',
          },
        ],
     },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Usage',
                to: '/docs/usage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/notnmeyer/tsk/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/notnmeyer/tsk/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/notnmeyer/tsk',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['toml'],
      },
    }),
};

export default config;
