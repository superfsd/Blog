import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '技术博客',
  description: '个人技术博客',
  base: '/Blog/',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: 'Nuget配置',
        link: 'guide/nuget'
      }
    ]
  })
})
