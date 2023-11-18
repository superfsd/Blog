import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '技术博客',
  description: '个人技术博客',
  base: '/Blog/',
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 2,
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
            link: '/Tools/Nuget',
          }
        ],
      },
      {
        text: '开发',
        children: [
          {
            text: 'C#',
            link: '/Develop/CSharp/Conventions',
          },
          {
            text: '设计模式',
            link: '/Develop/DesignPattern',
          }
        ],
      }
    ],
    // sidebar: {
    //   '/Tools/Nuget': ['/Tools/Nuget'],
    //   '/Develop/CSharp/Conventions': ['/Develop/CSharp/Conventions'],
    //   '/Develop/DesignPattern': [{
    //     text: '创建型设计模式',
    //     collapsible: true,
    //     children: [
    //       '/Develop/DesignPattern/CreationalDesignPatterns/FactoryDesignPattern',
    //       '/Develop/DesignPattern/CreationalDesignPatterns/AbstractFactoryDesignPattern'
    //     ]
    //   },
    //   ]
    // },
  })
})
