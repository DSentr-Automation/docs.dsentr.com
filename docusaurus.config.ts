import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Dsentr Docs',
  tagline: 'Automate everything without the mess',
  url: 'https://docs.dsentr.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dsentr', // GitHub org or username
  projectName: 'docs-site',
  deploymentBranch: 'gh-pages', // for GH Pages if used
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Dsentr',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://app.dsentr.com', label: 'App', position: 'right' }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Dsentr`,
    },
  },
};
module.exports = config;


export default config;
