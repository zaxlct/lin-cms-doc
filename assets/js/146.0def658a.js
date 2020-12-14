(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{526:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目结构及开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构及开发规范"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 项目结构及开发规范")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("阅读本小节前，请确保你已经完成了"),a("RouterLink",{attrs:{to:"/start/flask/"}},[t._v("上一节")]),t._v("的内容，当然你非常熟\n悉 Flask 的开发也可直接阅读本小节")],1)]),t._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("blockquote",[a("p",[t._v("Flask 是一个优美的微框架。这既是一件好事——你可以按照自己的习惯和想法来组织你的\n项目，不过对于团队来说这可能是一件坏事——团队每个人都有自己的喜好，这会使整体项\n目的结构很混乱。因此我们提供了 starter 模板项目，它是我们团队从诸多项目开发中\n提炼而来的一种规范，它不仅仅是结构，风格还有诸多细节，你会在后续逐渐了解到。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("│   code.md // 记录自定义的返回码和信息\n│   fake.py // 测试和做假数据的脚本\n│   "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("starter.py"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" // 程序的开始文件\n└───app // app目录\n    │   app.py // 创建Flask app及应用扩展\n    │   __init__.py // 默认的包初始化文件\n    │\n    ├───api // api目录\n    │   │   __init__.py // 默认的包初始化文件\n    │   │\n    │   ├───cms // 开发CMS API目录\n    │   │   │   __init__.py // 创建CMS2蓝图\n    │   │\n    │   ├───v1 // 开发普通API目录\n    │   │   │   book.py // 上节的book测试文件\n    │   │   │   __init__.py // 创建v1蓝图\n    │\n    ├───config // 配置文件目录\n    │   │   "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("secure.py"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" // 有关于安全的配置\n    │   │   setting.py // 基础配置\n    │\n    ├───libs // 类库文件夹\n    │   │   error_code.py // 自定义异常文件\n    │   │   utils.py // 工具文件\n    │\n    ├───models // 模型文件夹\n    │   │   book.py // book模型文件\n    │   │   __init__.py // 默认的包初始化文件\n    │\n    ├───plugins // Lin插件目录\n    │       .gitkeep\n    │\n    ├───validators // 校验类存放目录\n    │   │   forms.py // 校验类文件\n    │   │   __init__.py // 默认的包初始化文件\n")])])]),a("p",[t._v("上面是 starter 项目的整体结构，开发时我们强烈建议你遵循如下规范开发，在前期你肯\n定会不适应，但慢慢地你会爱上它。")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("app/api")]),t._v(" 文件夹中开发 API，并将不同版本，不同类型的 API 分开，如：v1 代表\n第一版本的 API，v2 代表第二版本，cms 代表属于 cms 的 API。")]),t._v(" "),a("li",[t._v("将程序的配置文件放在 "),a("code",[t._v("app/config")]),t._v(" 文件夹下，并着重区分 "),a("code",[t._v("secure（安全性配置）")]),t._v("\n和 "),a("code",[t._v("setting（普通性配置）")]),t._v("。配置更详细内容参考"),a("RouterLink",{attrs:{to:"/server/flask/config.html"}},[t._v("配置")])],1),t._v(" "),a("li",[t._v("将可重用的类库放在 "),a("code",[t._v("app/libs")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将数据模型放在 "),a("code",[t._v("app/models")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将开发的插件放在 "),a("code",[t._v("app/plugins")]),t._v(" 文件夹下。")]),t._v(" "),a("li",[t._v("将校验类放在 "),a("code",[t._v("app/validators")]),t._v(" 文件夹下。")])]),t._v(" "),a("h2",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("h3",{attrs:{id:"api-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-规范"}},[t._v("#")]),t._v(" API 规范")]),t._v(" "),a("p",[t._v("由于 Flask 本身的灵活性，社区中涌现出了一些便捷开发 Flask Restful API 的框架，其\n中包括 "),a("code",[t._v("flask-restful")]),t._v("，"),a("code",[t._v("flask-restplus")]),t._v(" 等。就 Flask 本身而言，我们觉得它对于\nAPI 的粒度控制不够好，因此我们提供了一个 "),a("code",[t._v("红图")]),t._v(" 的机制来帮助我们细粒度的控制\nAPI。相较于 "),a("code",[t._v("flask-restful")]),t._v("，"),a("code",[t._v("flask-restplus")]),t._v(" 这些框架而言，红图更注\n重"),a("strong",[t._v("小")]),t._v("与"),a("strong",[t._v("轻")]),t._v("。红图的源代码如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Redprint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" with_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n     self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("with_prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" with_prefix\n     self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f\n\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorator\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url_prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url_prefix "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("with_prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         url_prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         url_prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"endpoint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url_prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rule\n             bp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_url_rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             bp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_url_rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url_prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("红图本身只有 24 行代码，极易学习和掌握，它的作用并非去控制 API，而是做一个纽带将\n细粒度的 API 传递到相应的蓝图（Flask 自带的机制）中。因此红图的书写方式几乎与蓝\n图保持一致，相较于其它 API 开发方式，你几乎不需要任何学习成本。")]),t._v(" "),a("p",[t._v("一般的，我们推荐你在一类 API 中新建一个红图（如 Book 这一类，它负责与图书相关的\nAPI）。如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# book.py")]),t._v("\n book_api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Redprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'book'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建book红图")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@book_api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/<id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" NotFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'没有找到相关书籍'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果你熟悉 Flask，你会发现这几乎与 Flask 的标准开发方式一样。新建红图时，你需传\n入红图的名称，如"),a("code",[t._v("book")]),t._v("，而后红图会自己在访问的 url 中加入"),a("code",[t._v("/book")]),t._v("前缀。")]),t._v(" "),a("p",[t._v("在 Flask 的开发中，几乎都会墨守成规的使用"),a("em",[t._v("装饰器")]),t._v("来优雅的书写视图函数，我们承袭\n了这一特点，也希望你能够喜欢。")]),t._v(" "),a("h3",{attrs:{id:"数据库模型规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库模型规范"}},[t._v("#")]),t._v(" 数据库模型规范")]),t._v(" "),a("p",[t._v("Flask 本身并非对数据库做出支持，但它通过集成"),a("code",[t._v("sqlalchemy")]),t._v("提供\n了"),a("code",[t._v("flask sqlalchemy")]),t._v("这个好用的扩展，如果你不熟悉，请先阅\n读"),a("a",{attrs:{href:"http://flask-sqlalchemy.pocoo.org/2.3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("为了 使 flask sqlalchemy 更加好用和人性化，我们也提供了些许工具类，它将会为你的\n开发助力。当然它本身也足够简单，核心代码如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SQLAlchemy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SQLAlchemy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重写SQLAlchemy的核心类")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@contextmanager")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("auto_commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v("\n             self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n             self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" e\n")])])]),a("p",[t._v("由于数据库本身的特性，为了保证数据的正确性，一般只有向数据库提交后才能使数据更新\n生效，因此大多数情况下，你不得不在你的代码的最后几行写上：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当然有时你的操作会触发异常，你也不得不加入：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rollback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("对于重复的操作，一般的方式是提供一个工具方法或工具类，因此我们为 SQLAlchemy 核心\n类提供了一个非常实用的方法"),a("code",[t._v("auto_commit")]),t._v("（这需要一定的 contextmanager 知识）。有\n了该方法后，对于属于数据库操作，我们可以这样：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auto_commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qr_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _check_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("当然，对于数据库的查询，你还是得详细地阅读"),a("code",[t._v("sqlalchemy")]),t._v("的文档来学习。")]),t._v(" "),a("h3",{attrs:{id:"异常处理规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理规范"}},[t._v("#")]),t._v(" 异常处理规范")]),t._v(" "),a("p",[t._v("提起异常，大多时候我们都并不想碰见，因为它经常会与程序 crash 一起出现。但它确实\n又是程序中不可或缺的一部分，在 Lin 中我们默认集成了全局异常处理机制。因此不论你\n程序出现何种异常，都将会返回固定格式的提示信息给前端。对于前端来说，这是非常友好\n的一种交互。")]),t._v(" "),a("p",[t._v("在 Lin 的源码中关于异常处理的代码如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorhandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" APIException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 已知的自定义异常直接返回")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HTTPException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未知的http异常，取信息再以特定的格式返回")]),t._v("\n            code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code\n            msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description\n            error_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1007")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" APIException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DEBUG'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UnknownException"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未定义异常，返回未知异常")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" e\n")])])]),a("p",[t._v("熟悉 Flask 的肯定知道，这就是 Flask 处理异常的方式。在项目开发中我们强力推荐，甚\n至可以说是"),a("strong",[t._v("要求")]),t._v("你在开发的过程中，关于某一类的异常一定要通过继\n承"),a("code",[t._v("APIException")]),t._v("的方式来自定义，这会让前后端的交互更加友好。")]),t._v(" "),a("p",[t._v("当然，当你每自定义一个异常后，别忘记在根目录下的"),a("code",[t._v("code.md")]),t._v("中记录相关异常的\nerror_code 和 msg，方便前端查阅和团队协作。")]),t._v(" "),a("h3",{attrs:{id:"数据校验规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据校验规范"}},[t._v("#")]),t._v(" 数据校验规范")]),t._v(" "),a("p",[t._v("我们强烈建议你为每个有数据校验的接口定义一个相应的校验类。关于 flask-wtf 的使用\n，请阅读"),a("a",{attrs:{href:"https://flask-wtf.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BookSearchForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StringField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DataRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'必须传入搜索关键字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 校验参数q")]),t._v("\n")])])]),a("p",[t._v("如上，我们定义了一个图书搜索的校验类，在"),a("code",[t._v("BookSearchForm")]),t._v("类中定义了一个字段"),a("code",[t._v("q")]),t._v("。\n该字段会对前端传入的数据做出校验，若传入的数据中不存在"),a("code",[t._v("q")]),t._v("字段，则会返回前端一个\n错误信息，错误信息为"),a("code",[t._v("必须传入搜索关键字")]),t._v("。")]),t._v(" "),a("p",[t._v("到这里，你或许未发现校验类的可取之处，因为这个简单的校验直接在视图函数中实现，或\n许更为直接和简单。")]),t._v(" "),a("p",[t._v("但是，一旦我们的数据变多，且校验规则变得复杂，如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegisterForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PasswordField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        DataRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'新密码不可为空'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Regexp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'^[A-Za-z0-9_*&$#@]{6,22}$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'密码长度必须在6~22位之间，包含字符、数字和 _ '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        EqualTo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confirm_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'两次输入的密码不一致，请输入相同的密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    confirm_password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PasswordField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'确认新密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DataRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请确认密码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StringField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DataRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名不可为空'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                       length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户名长度必须在2~10之间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StringField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'电子邮件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validators"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        Regexp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'电子邮箱不符合规范，请输入正确的邮箱'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以发现，当我们需要校验的参数变得复杂时，一个专注于校验的类可以让我们的代码变得\n更易维护，提升代码整体的可读性。")]),t._v(" "),a("h3",{attrs:{id:"配置规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置规范"}},[t._v("#")]),t._v(" 配置规范")]),t._v(" "),a("p",[t._v("在我们的 starter 项目中，统一把项目的配置文件放在了"),a("code",[t._v("app/config")]),t._v("文件夹下。当然，\n我们也强烈建议你如此做。不仅如此，由于 Flask 对配置项的限制，你必须保证命名全都\n大写，如"),a("code",[t._v("BP_URL_PREFIX")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# main config")]),t._v("\nBP_URL_PREFIX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cms'")]),t._v("\n")])])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("到此，我们介绍了项目的结构和开发规范。本小节注重的不是项目的开发实现与细节，而是\n项目的整体与规范，对于很多人来说，去适应一个规范会觉得不舒服，但对于团队来说，这\n是一件必须的事。最后，送大家一句话——越规矩，越自由。")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);