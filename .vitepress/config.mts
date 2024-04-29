import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Blog/',
  title: '全栈人',
  description: '个人在线文档',
  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: '/Blog/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav,
    sidebar: { ...sidebar } as any,
    footer: {
      copyright: '版权所有'
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
