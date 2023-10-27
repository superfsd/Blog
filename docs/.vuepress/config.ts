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
        text: '工具',
        children: [
          {
            text: 'Nuget',
            link: '/tools/nuget'
          }
        ],
      },
      {
        text: '开发',
        children: [
          {
            text: 'C#',
            link: '/develop/csharp/conventions'
          }
        ],
      }
    ],
    sidebar: {
      '/tools/nuget': [
        {
          text: '操作指南',
          link: '/tools/nuget',
        },
        // {
        //   text: '编码规范',
        //   link: '/guide/conventions',
        // }
      ],
      '/develop/csharp/conventions': [
        {
          text: '编码规范',
          link: '/develop/csharp/conventions',
        }
      ]
    }
  })
})
