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
      },
      {
        text: '工具文档',
        children: [
          {
            text: 'Nuget配置',
            link: '/guide/nuget'
          }
        ],
      }
    ],
    sidebar: {
      '/guide/nuget': [
        {
          text: '测试',
          link: '/guide/nuget',
        },
        {
          text: '编码规范',
          link: '/guide/conventions',
        }
      ],
      '/guide/conventions': [
        {
          text: '测试',
          link: '/guide/nuget',
        },
        {
          text: '编码规范',
          link: '/guide/conventions',
        }
      ]
    }
  })
})
