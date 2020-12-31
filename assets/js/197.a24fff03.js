(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{576:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端起步"}},[t._v("#")]),t._v(" 前端起步")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("阅读本小节前，请确保你已经完成了"),a("RouterLink",{attrs:{to:"/start/spring-boot/"}},[t._v("服务端部署")]),t._v("，否则在登录时将无法通过权鉴认证。")],1)]),t._v(" "),a("h2",{attrs:{id:"你必须了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你必须了解"}},[t._v("#")]),t._v(" 你必须了解")]),t._v(" "),a("p",[t._v("Lin 的前端是基于 Vue 的，所以你需要首先安装一些支持 Vue 的运行环境以及必备工具。无需担心，正如同我们之前运行 Server 时的步骤一样，前端的起步依然非常简单。")]),t._v(" "),a("h2",{attrs:{id:"client-端必备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-端必备环境"}},[t._v("#")]),t._v(" Client 端必备环境")]),t._v(" "),a("ul",[a("li",[t._v("安装 "),a("code",[t._v("Node.js")]),t._v("（version：8.11.0+）")]),t._v(" "),a("li",[t._v("确保 "),a("code",[t._v("npm")]),t._v(" 或者 "),a("code",[t._v("yarn")]),t._v(" 可用")])]),t._v(" "),a("h2",{attrs:{id:"下载工程代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载工程代码"}},[t._v("#")]),t._v(" 下载工程代码")]),t._v(" "),a("p",[t._v("打开命令行工具，键入以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/TaleLin/lin-cms-vue.git\n")])])]),a("h2",{attrs:{id:"安装依赖包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包"}},[t._v("#")]),t._v(" 安装依赖包")]),t._v(" "),a("p",[t._v("进入工程项目根目录后，键入以下命令:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" lin-cms-vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),a("p",[t._v("因为 Lin 是基于 "),a("code",[t._v("vue-cli3")]),t._v(" 开发的，那么默认的本地服务启动的命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Node 版本要求")]),t._v(" "),a("p",[t._v("Vue CLI 需要 "),a("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),a("OutboundLink")],1),t._v(" 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 "),a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm-windows"),a("OutboundLink")],1),t._v(" 在同一台电脑中管理多个 Node 版本。")])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("每个人的 "),a("code",[t._v("node")]),t._v(" 开发版本不尽相同，可能会遇到 "),a("code",[t._v("Node Sass")]),t._v(" 兼容性问题，请尝试下面的命令（报错与node-sass相关）：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" rebuild node-sass\n")])])]),a("h2",{attrs:{id:"完成登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成登录"}},[t._v("#")]),t._v(" 完成登录")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("配置 api 地址：")]),t._v(" 打开配置文件 "),a("code",[t._v(".env.development")]),t._v(" 配置 "),a("code",[t._v("VUE_APP_BASE_URL")]),t._v(" ，本地开发阶段配置本地虚拟域名(http://localhost:5000/)，线上部署生产域名。")])]),t._v(" "),a("li",[a("p",[t._v("通过管理员账号密码登录，"),a("RouterLink",{attrs:{to:"/start/spring-boot/#运行"}},[t._v("账号密码")]),t._v("是通过 "),a("code",[t._v("起步")]),t._v(" 中的脚本创建。")],1)])]),t._v(" "),a("p",[t._v("到此，通过脚手架内置的 webpack 本地服务，访问http://localhost:8080，将打开 Lin 的登录页面，如果一切正常，你将通过账号密码成功登陆，Congratulations！")]),t._v(" "),a("p",[a("strong",[t._v("接下来我们来完成一个简单的 "),a("RouterLink",{attrs:{to:"/start/spring-boot/frontend-demo.html"}},[t._v("Demo")]),t._v(" 帮助开发者更快的熟悉 Lin。")],1)]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=r.exports}}]);