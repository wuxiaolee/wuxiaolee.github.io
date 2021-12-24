(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{395:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("ul",[s("li",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML。")]),t._v(" "),s("li",[t._v("一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")])]),t._v(" "),s("h1",{attrs:{id:"它是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它是如何工作的"}},[t._v("#")]),t._v(" 它是如何工作的？")]),t._v(" "),s("ul",[s("li",[t._v("一个 VuePress 网站是一个由 Vue、Vue Router 和 webpack 驱动的单页应用。")]),t._v(" "),s("li",[t._v("在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。")]),t._v(" "),s("li",[t._v("参考https://nuxtjs.org/、参考https://www.gatsbyjs.com/")])]),t._v(" "),s("h1",{attrs:{id:"基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("ul",[s("li",[t._v("在 docs 目录下创建 .vuepress 目录，然后在该目录下创建配置文件 config.js，\n内容举例为：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello VuePress'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Just playing around'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("是一个带有页头，页头中有标题和搜索框")])]),t._v(" "),s("h2",{attrs:{id:"目录结构的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构的介绍"}},[t._v("#")]),t._v(" 目录结构的介绍")]),t._v(" "),s("ul",[s("li",[t._v("VuePress 遵循 “约定优于配置” 的原则")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),s("ul",[s("li",[t._v("docs/.vuepress/public: 静态资源目录。")])]),t._v(" "),s("h1",{attrs:{id:"主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),s("h2",{attrs:{id:"使用主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用主题"}},[t._v("#")]),t._v(" 使用主题")]),t._v(" "),s("h2",{attrs:{id:"开发主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发主题"}},[t._v("#")]),t._v(" 开发主题")]),t._v(" "),s("h2",{attrs:{id:"主题配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题配置-2"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),s("h2",{attrs:{id:"采用默认的主题配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#采用默认的主题配置"}},[t._v("#")]),t._v(" 采用默认的主题配置")]),t._v(" "),s("h3",{attrs:{id:"首页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),s("p",[t._v("在根级 README.md文件中配置首页，内容格式如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nhome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nheroImage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\nheroText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hero 标题\ntagline"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Hero 副标题\nactionText"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 快速上手 →\nactionLink"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("guide"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nfeatures"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 简洁至上\n  details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Vue驱动\n  details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 享受 Vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 高性能\n  details"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VuePress 为每个页面预渲染生成静态的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTML")]),t._v("，同时在页面被加载的时候，将作为 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPA")]),t._v(" 运行。\nfooter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIT")]),t._v(" Licensed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Copyright © "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("present Evan You\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\n")])])]),s("ul",[s("li",[t._v("这种格式称为 YAML front matter。")]),t._v(" "),s("li",[t._v("将相应的内容设置为 null 来禁用标题和副标题。")]),t._v(" "),s("li",[t._v("任何 YAML front matter 之后额外的内容将会以普通的 markdown 被渲染，并插入到 features 的后面。")])]),t._v(" "),s("h3",{attrs:{id:"导航栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航栏"}},[t._v("#")]),t._v(" 导航栏")]),t._v(" "),s("ul",[s("li",[t._v("导航栏可能包含你的导航栏 Logo、页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。")]),t._v(" "),s("li",[t._v("可以通过 YAML front matter 来禁用某个指定页面的导航栏")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("navbar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),s("h3",{attrs:{id:"侧边栏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏"}},[t._v("#")]),t._v(" 侧边栏")]),t._v(" "),s("ul",[s("li",[t._v("想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sidebar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/page-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/page-b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Explicit link text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"搜索-search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索-search"}},[t._v("#")]),t._v(" 搜索 Search")]),t._v(" "),s("ul",[s("li",[t._v("全局搜索：themeConfig.algolia 选项来用 Algolia 搜索 替换内置的搜索框，不同于开箱即用的 内置搜索，Algolia 搜索 (opens new window)需要你在使用之前将你的网站提交给它们用于创建索引。")])]),t._v(" "),s("h3",{attrs:{id:"页面滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面滚动"}},[t._v("#")]),t._v(" 页面滚动")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("smoothScroll"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);