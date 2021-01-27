(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{447:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"运行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行流程"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 运行流程")],1),t._v(" "),s("blockquote",[s("p",[t._v("在前面几小节中，我们介绍了 starter 项目的结构和开发规范，还通过一个简单的 book 项目熟悉了整体开发流程。\n本小节将会详细说明"),s("code",[t._v("Lin")]),t._v("的运行流程，你会对整个项目有更加清晰的认识。")])]),t._v(" "),s("h2",{attrs:{id:"app-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-初始化"}},[t._v("#")]),t._v(" app 初始化")]),t._v(" "),s("p",[t._v("在前面我们提到，程序的入口文件是根目录下的"),s("code",[t._v("starter.py")]),t._v("文件，我们打开"),s("code",[t._v("starter.py")]),t._v("文件，里面的内容为：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_app "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从app.app中导入create_app")]),t._v("\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("内容十分简单，我们从 app.app 中导入"),s("code",[t._v("create_app")]),t._v("函数，该函数会创建一个 Flask app 的实例，而后调用实例的"),s("code",[t._v("run")]),t._v("方法。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            load_dotenv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("p",[t._v("run 方法的定义如上，你可以传入很多参数，例如："),s("code",[t._v("host")]),t._v("，默认为"),s("code",[t._v("127.0.0.1")]),t._v("；"),s("code",[t._v("port")]),t._v("，默认为"),s("code",[t._v("5000")]),t._v("。当你运行该文件时，会以"),s("code",[t._v("debug")]),t._v("模式打开一个本地的服务，默认监听"),s("code",[t._v("127.0.0.1:5000")]),t._v("。请注意，当你在应用上线时，请关闭 debug 模式。")]),t._v(" "),s("p",[s("code",[t._v("create_app")]),t._v("方法是 starter 项目中的一个自定义方法，它的定义我们可以在"),s("code",[t._v("app/app.py")]),t._v("中找到。如下：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#**********************")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 初始化Flask app实例")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.config.setting'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.config.secure'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 导入配置文件")]),t._v("\n    register_blueprints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 注册所有蓝图")]),t._v("\n    Lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 初始化Lin，第一个初始化的扩展")]),t._v("\n    apply_cors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 应用跨域扩展，使app支持请求跨域")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建所有表格")]),t._v("\n    create_tables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6. 创建所有数据表")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" app\n")])])]),s("p",[t._v("在注释中，我们已经详细的描述了"),s("code",[t._v("create_app")]),t._v("函数每一行代码所发挥的作用。相信你能理解这个函数的作用，但是我们仍然必须罗列如下几点要求：")]),t._v(" "),s("ul",[s("li",[t._v("一旦 app 创建，我们推荐第一时间导入配置。Flask 的扩展会依赖一些配置，因此你必须在第一时间导入配置以保证你的配置生效。")]),t._v(" "),s("li",[t._v("请将 Lin 的初始化放在 Flask 扩展的第一位。Flask 有诸多扩展，如应用跨域的 flask-cors 扩展，因此你必须在初始化这些扩展之前，先初始化 Lin。")]),t._v(" "),s("li",[t._v("请在函数的最后调用"),s("code",[t._v("create_tables")]),t._v("函数来创建所有数据库表，以保证你所有的模型类均能与数据库关联。")])]),t._v(" "),s("h2",{attrs:{id:"lin-初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lin-初始化"}},[t._v("#")]),t._v(" Lin 初始化")]),t._v(" "),s("p",[t._v("在上面 app 的初始化过程中，无疑 Lin 的初始化是最为重要的。接下来，我们来着重分析一下 Lin 初始化的详细流程。我们查看源码（第三方包 lin-cms 的源码），在"),s("code",[t._v("lin/core.py")]),t._v("中可以找到 Lin 的定义。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Flask "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flask app , default None")]),t._v("\n                 group_model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# group model, default None")]),t._v("\n                 user_model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user model, default None")]),t._v("\n                 auth_model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# authority model, default None")]),t._v("\n                 create_all"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否创建所有数据库表, default false")]),t._v("\n                 mount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否挂载默认的蓝图, default True")]),t._v("\n                 handle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否使用全局异常处理 , default True")]),t._v("\n                 json_encoder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否使用自定义的json_encoder , default True")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" group_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auth_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" create_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" json_encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Lin 的构造函数共有 8 个参数，它们作用如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("app")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Flask app 实例")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),s("td",[t._v("传入 app 实例")])]),t._v(" "),s("tr",[s("td",[t._v("group_model")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("权限组模型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),s("td",[t._v("默认为 None，使用 Lin 中默认的权限组模型；若传入模型，则使用传入的模型")])]),t._v(" "),s("tr",[s("td",[t._v("user_model")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("用户模型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),s("td",[t._v("默认为 None，使用 Lin 中默认的用户模型；若传入模型，则使用传入的模型")])]),t._v(" "),s("tr",[s("td",[t._v("auth_model")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("权限模型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),s("td",[t._v("默认为 None，使用 Lin 中默认的权限模型；若传入模型，则使用传入的模型")])]),t._v(" "),s("tr",[s("td",[t._v("create_all")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否创建所有数据表")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",[t._v("****")])]),t._v(" "),s("tr",[s("td",[t._v("mount")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否挂载默认蓝图")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",[t._v("****")])]),t._v(" "),s("tr",[s("td",[t._v("handle")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否处理全局异常")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",[t._v("****")])]),t._v(" "),s("tr",[s("td",[t._v("json_encoder")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否使用 自定义的 json 的编码器")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),s("td",[t._v("改变 Flask 的默认 json 编码器")])])])]),t._v(" "),s("p",[t._v("关于三个模型参数的使用，我们将在后面单独的一个小节详细介绍。在 Lin 的构造函数中，它本身还调用了自己的一个方法"),s("code",[t._v("init_app")]),t._v("，如下：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default config")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setdefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PLUGIN_PATH'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认的PLUGIN_PATH配置，插件路径的配置")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认蓝图的前缀")]),t._v("\n        app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setdefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BP_URL_PREFIX'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认的BP_URL_PREFIX配置，默认蓝图的url前缀")]),t._v("\n        json_encoder "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_enable_json_encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 自定义的 json 的编码器")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化 manager ，manager主要负责基础库中模型的使用")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PLUGIN_PATH'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               group_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               user_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                               auth_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'manager'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将manager注册到app的extensions中")]),t._v("\n        db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化flask-sqlalchemy扩展")]),t._v("\n        create_all "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_enable_create_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建所有数据库表，不建议在此处调用")]),t._v("\n        jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化flask-jwt扩展")]),t._v("\n        mount "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载默认的CMS蓝图")]),t._v("\n        handle "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handle_error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用全局异常处理")]),t._v("\n")])])]),s("p",[t._v("因为 manager 主要负责 Lin 的数据模型的操作，这会在"),s("RouterLink",{attrs:{to:"/0.2.x/server/flask/authority_and_models.html"}},[t._v("其它小节")]),t._v("和上述的三个模型参数一起介绍。")],1),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("db")]),t._v("和"),s("code",[t._v("jwt")]),t._v("这两个 Flask 的扩展，Lin 默认就已经集成这两个扩展，如果你希望对它们有更加深入的了解，请阅读相应的官方文档。"),s("a",{attrs:{href:"https://flask-jwt-extended.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flask-JWT-Extended"),s("OutboundLink")],1),t._v("；"),s("a",{attrs:{href:"http://flask-sqlalchemy.pocoo.org/2.3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flask-SQLAlchemy"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"视图函数挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图函数挂载"}},[t._v("#")]),t._v(" 视图函数挂载")]),t._v(" "),s("p",[t._v("接下来我们着重分析"),s("code",[t._v("mount")]),t._v("这个函数，它会将默认的视图函数以及 Lin 插件的视图函数挂载到 app 中，当用户访问相应的 url 时便可得到相应的回应。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载默认的路由")]),t._v("\n    bp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到默认的CMS蓝图")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载插件的路由")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" plugin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" controller "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controllers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Lin的插件的视图函数挂载到默认蓝图中")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register_blueprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url_prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BP_URL_PREFIX'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将默认的蓝图注册到app中")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将每个需要权限管理的视图函数加入到ep_meta中，注：此处我们将在后续介绍，你只需要知道它会把某个视图函数的信息加入到manager中，供权限调度")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view_functions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" route_meta_infos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ep_meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setdefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("到此，你或许有些疑惑，Lin 还有插件？是的，Lin 是有自己的插件机制的，Lin 的插件（plugin）跟 Flask 的扩展（extension）很像，但它们"),s("strong",[t._v("压根")]),t._v("不是同一种东西！！！")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("你可以如此区分，Lin 是 Flask 的一个扩展，而 Lin 本身又带有诸多插件，Lin 的插件可以认为是 Flask 扩展的一部分。\n关于插件，Lin 在第一个版本并没有引入，这将会在下个版本进行支持。如果你有兴趣，可以通过源代码提前了解。")])]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("bp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Blueprint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __name__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在上段代码中，我们定义了一个默认的插件蓝图，这个蓝图并没有停止挂载红图。而是依次遍历每个插件，并且将插件的 controller（控制类，实则就是一个红图）挂载到这个蓝图上。所以，这个蓝图上就有"),s("em",[t._v("默认基础库")]),t._v("和"),s("em",[t._v("插件")]),t._v("的所有的视图函数。")]),t._v(" "),s("p",[t._v("至此，程序跑起来后，你就可以通过相应的 url 访问所有视图函数对应的 API。")]),t._v(" "),s("h2",{attrs:{id:"小节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小节"}},[t._v("#")]),t._v(" 小节")]),t._v(" "),s("p",[t._v("在本小节中，我们分析了项目的运行流程。当然我们没有叙述 app 的启动流程，而是介绍了 Lin 的初始化和视图函数的挂载流程，并且着重区分了 Flask 的"),s("strong",[t._v("扩展")]),t._v("以及 Lin 的"),s("strong",[t._v("插件")]),t._v("。当然这里面有很重要的一环——插件的加载。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("在 Lin 的 1.0.0 的版本之前，插件机制虽然存在，但却未被真正使用。因此如果你对此有所疑惑，没关系，我们会在插件彻底上线后，着重解析插件的使用和原理。")])]),t._v(" "),s("RightMenu")],1)}),[],!1,null,null,null);a.default=e.exports}}]);