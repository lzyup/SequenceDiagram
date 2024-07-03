import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SequenceDiagrams',
  description: 'SequenceDiagrams usage',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/usage' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '参数说明', link: '/api-examples' },
          { text: '使用示例', link: '/usage' },
          { text: '效果图', link: '/result' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lzyup/SequenceDiagram' },
    ],
  },
});
