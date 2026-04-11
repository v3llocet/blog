import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';

const config: Config = {
  title: "v3llocet's Blog",
  tagline: 'terminal logs from the neon underground',
  favicon: 'img/favicon.ico',

  url: 'https://v3llocet.vercel.app/',
  baseUrl: '/',

  organizationName: 'v3llocet',
  projectName: 'blog',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          remarkPlugins: [
            remarkMath,
            [npm2yarn, {sync: true}],
          ],
          rehypePlugins: [rehypeKatex],
          exclude: [
            '**/showcase/**',
          ]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-1SN5VZZ2CQ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: false,
        indexBlog: true,
        indexPages: false,
        blogRouteBasePath: '/',
        blogDir: 'blog',
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
      `,
    },
  ],

  scripts: [
    
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'theme-color',
        content: '#020403',
      },
      {
        name: 'description',
        content: "V3llocet's Blog Blue",
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "v3llocet's Blog",
      logo: {
        alt: 'logo',
        src: 'https://avatars.githubusercontent.com/u/108526529?s=400&u=824c07b5f7326274238227713d17d3e53e83f6dd&v=4',
      },
      items: [
        {
          to: '/',
          label: 'Feed',
          position: 'left',
          exact: true,
        },
        {
          to: '/archive',
          label: 'Archive',
          position: 'left',
        },
        {
          to: '/tags',
          label: 'Tags',
          position: 'left',
        },
        {
          href: 'https://github.com/v3llocet',
          label: 'Github',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Top',
              to: '/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'X (Twitter)',
              href: 'https://x.com/v3llocet',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home Page',
              href: 'https://v3llocet.vercel.app/',
            },
            {
              label: '.void',
              href: 'https://v3llocet.vercel.app/void.htm',
            },
          ],
        },
      ],
      copyright: `v3llocet Loves You ❤️ !!! `,
    },

    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
