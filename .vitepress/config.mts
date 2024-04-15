import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Blog/',
  title: '个人博客',
  description: 'Vitepres构建',
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: nav,
    sidebar: { ...sidebar } as any,
    footer: {
      copyright: '版权所有'
    }

    // socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
