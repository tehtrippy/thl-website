/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tong Hua Labs',
  url: 'https://tehtrippy.github.io/thl-website/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tehtrippy',
  projectName: 'thl-website',
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Tonghualabs Logo',
        src: 'img/tonghualabs_logo.svg',
        srcDark: 'img/tonghualabs_logo.svg',
      },
      items: [
        {
          label: 'Labs',
          position: 'left',
          className: 'dropdown dropdown-primary',
          items: [
            {
              label: 'Media Lab',
              href: '/media-lab',
            },
            {
              label: 'Web3 Lab',
              href: '/web3-lab',
            },
          ],
        },
        { to: '/projects', label: 'Projects', position: 'left' },
        { to: '/services', label: 'Services', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/contact', label: 'Contact Us', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          href: 'https://www.facebook.com/TongHuaLabs',
          position: 'right',
          className: 'header-facebook-link',
          'aria-label': 'Facebook',
        },
        {
          href: 'https://www.instagram.com/tonghualabs/',
          position: 'right',
          className: 'header-instagram-link',
          'aria-label': 'Instagram',
        },
        {
          href: 'https://twitter.com/tonghualabs',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter',
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              html: `<div class="footer_band">
        <img src="/img/tonghualabs_logo.svg" class="footer_logo"/>
        <span>© Tong Hua Labs ${new Date().getFullYear()}. All Rights Reserved</span>
        </div>`,
            },
          ],
        },
        {
          title: 'General',
          items: [
            {
              label: 'About',
              href: '/about',
            },
            {
              label: 'Projects',
              href: '/projects',
            },
            {
              label: 'Services',
              href: '/services',
            },
          ],
        },
        {
          title: 'Labs',
          items: [
            {
              label: 'Media Lab',
              to: '/media-lab',
            },
            {
              label: 'Web3 Lab',
              to: '/web3-lab',
            },
          ],
        },
      ],
    },
    image: 'img/th_cover.png',
    metadatas: [{ name: 'twitter:card', content: 'summary_large_image' }],
    gtag: {
      trackingID: 'G-TH4LR2KWP3', // tracking id or measurement id
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'media-lab',
        path: 'media-lab',
        routeBasePath: 'media-lab',
        sidebarPath: require.resolve('./sidebars/sidebarsMediaLab.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'decentralized-web-lab',
        path: 'web3-lab',
        routeBasePath: 'web3-lab',
        sidebarPath: require.resolve(
          './sidebars/sidebarsDecentralizedWebLab.js'
        ),
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'th'],
  },
};
