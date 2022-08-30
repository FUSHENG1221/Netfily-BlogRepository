// 为什么存在配置文件
// Docusaurus 对配置文件将站点信息集中到一处。通过调用API的方式决定页面的结构
// （如导航栏、页脚、Logo、插件配置等）。
// 悉心维护的 docusaurus.config.js 能够让你在个性化站点的同时，
// 帮助你注于文档本身。

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github'); 
// 浅色代码插件-主题github
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// 深色主题插件

/** @type {import('@docusaurus/types').Config} */
const config = {
    // 配置常量
    title: 'FuSheng-Site',     // 网站的标题
    tagline: '欢迎来到我的网站！',    //  横幅副标题
    url: 'https://WanQian-Site.com', // 当网站上线后的地址
    baseUrl: '/', // 默认路径
    onBrokenLinks: 'throw',   //  处理损坏的链接方式-抛出
    onBrokenMarkdownLinks: 'warn',    // 处理损坏的md链接-警告
    favicon: 'img/favicon.ico',   // logo地址

  // GitHub pages deployment config.    Github Pages部署配置
  // If you aren't using GitHub pages, you don't need these.    如果你不需要Github Pages，那么你不需要它
  organizationName: 'facebook', // Usually your GitHub org/user name.   Github用户名
  projectName: 'docusaurus', // Usually your repo name. 仓库名

  // Even if you don't use internalization, you can use this field to set useful
  // 即使不使用内部化，也可以使用此字段设置为有用
  // metadata like html lang. For example, if your site is Chinese, you may want
  // 元数据，如HTML lang。例如，如果你的网站是中文的，你可能想要
  // to replace "en" with "zh-Hans".    将设置语言从英文转换为中文
  i18n: {
    defaultLocale: 'zh-Hans',   // 设置语言 zh-Hans是中文
    locales: ['zh-Hans'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  presets: [
    [
      'classic',    // 主题，默认
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.     请把这个换成你的仓库。
          // Remove this to remove the "edit this page" links.    删除此链接可以删除“编辑此页面”链接。
          // “编辑此页”地址
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // “编辑此页”地址
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'FuSheng-Site',   // 导航栏文字
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',  //导航栏LOGO
        },
        items: [
          //导航栏选项
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '笔记',
          },
          {to: '/blog', label: '博客', position: 'left'},
          // {
          //   to: '/website',
          //   label: 'Links',
          //   position: 'left',
          // },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        //页脚选项
        style: 'dark',
        links: [
          {
            title:'Website',
            items:[
              {
                label:'Home',
                to: '/',
              },
              {
                label:'Study',
                to: '/docs/intro',  
              },
              {
                label:'Blog',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Tech Links',
            items: [
              {
                label: 'Python',
                href: 'https://www.w3school.com.cn/python/index.asp',
              },
              {
                label: 'Java',
                href: 'https://zq99299.github.io/java-tutorial/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '源代码',
                href: 'https://github.com/FUSHENG1221/BlogRepository',
              },
              {
                label: '北林计协',
                href: 'https://bljx2022project.github.io/bljx_blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        //底部版权声明，支持 html语法
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
