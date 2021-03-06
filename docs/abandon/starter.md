---
title: 快速开始
---

# <H2Icon /> 快速开始

> 我们提供了一个 CMS 的快速开始的模板（Starter），方便你快速开发。

## 初始化

打开你的命令行工具（terminal），在其中键入:

```bash
git clone -b starter https://git.coding.net/pedrogao/lanyan-server.git
```

由于 python 的版本众多，且差异性也很大，我们强烈建议你通过 `pipenv` 来新建虚拟环境开发项目，在我们的*starter*项目的根目录下有一个名为 `Pipfile` 的文件，我们将通过它来创建整个项目的虚拟环境。

如果你熟悉 Java，那么 `Pipfile` 的作用类似于 Maven 中的 `pom.xml` ，如果你熟悉 Node.js，那你可以把它的功能类比于 `package.json`。

如果你还未使用过 `pipenv` 或者未接触过它，请确保你有正确的 python 环境，并使用 `pip` 安装 `pipenv`。 接下在，继续在命令行中输入：

```bash
cd starter && pipenv shell && pipenv install --dev
```

如果一切顺利，你的电脑里会多出一个 python 的虚拟环境。关于 `pipenv` 的更多使用请参考[官网](https://pipenv.readthedocs.io/en/latest/)。

> 如果你不希望通过 pipenv 来开发，当然我们强烈推荐使用。你也可以通过根目录下的 requirements.txt 来安装相关的依赖
> 注意：通过 pipenv 创建的 python 虚拟环境时已经指定了 python 版本为 3.6，如果你通过 requirements.txt 使用，我们希望你与 3.6 版本保持一致，当然我们支持 3.6+的版本

## 快速开发

接下来，请用你最喜爱的编辑器打开 starter 项目，我们强烈建议你使用 pycharm（无论是否为个人版，社区版也很好用），当然如果你钟情于 VSCode，这也不会影响你的开发。

::: warning
在这里，请确保你已经安装好了 python 虚拟环境
:::

## 数据库初始化

打开项目后，请先进入 `app/config/secure.py` ，如下：

```py
# 数据库配置
SQLALCHEMY_DATABASE_URI = 'mysql+cymysql://root:123456@localhost:3306/lin-cms'
```

请在 `SQLALCHEMY_DATABASE_URI` 这项中配置你的数据库，用户和密码，关于 sqlalchemy 的具体使用请参考[官网](https://docs.sqlalchemy.org/en/latest/)。

记住`lin-cms`为数据库名，但是`sqlalchemy`无法直接创建该数据库，所以请你通过其他数据库工具（如 Navicat）或终端在 mysql 数据库中创建名为`lin-cms`的数据库，当然你也为该数据库取任何令你心仪的名字。

创建数据库并配置好后，运行 `starter.py` ，如果一切顺利，你将会在控制台的输出中看到程序已经正在运行，并且在你的数据库中会多出几张表，这些我们将在后面讲到。

## 开发 API

接下来，我们将开始一个简单的图书项目，来帮你熟悉整个项目的开发流程。

### 视图控制

打开 `app/api/v1` 文件夹，在该文件夹里新建 `book.py` 文件。我们从 `Lin` 从导入红图来创建 API 视图：

```py
from lin.redprint import Redprint
```

而后，初始化一个名为 `book_api` 的红图，并创建一个视图函数`get_book`：

:::warning
请记住此处视图函数所代表的意思，在后续的章节中它会非常重要！！！
:::

```py
from lin.redprint import Redprint
from flask import jsonify

book_api = Redprint('book')


@book_api.route('/<id>', methods=['GET'])
def get_book(id):
    return jsonify({
        'msg': 'hello, I am a book'
    })
```

如果你熟悉 Flask，应该可以发现这与 Flask 的 API 开发几乎一致，不过我们提供了一个红图的机制，让 API 的开发更加细粒度化。

到此一个简单的图书 API 开发就实现了，但是我们此时运行程序并不能访问到该 API。我们还需要将该红图挂载到项目的默认 API 蓝图上。

打开 `app/api/v1/__init__.py` 文件，向其中添加如下内容：

```py
from flask import Blueprint
from app.api.v1 import book


def create_blueprint_v1():
    bp_v1 = Blueprint('v1', __name__)
    book.book_api.register(bp_v1)
    return bp_v1
```

现在，我们已经可以通过 HTTP 请求到该 API 了，运行程序。然后通过 curl（你可以使用任何你喜爱的测试工具，postman 甚至浏览器都行） 访问 `http://127.0.0.1:5000/v1/book/1`。

如果一切顺利，你就可以在 terminal 中看到下面返回数据：

```py
{
  "msg": "hello, I am a book"
}
```

### 模型使用

打开 `app/models` 文件夹，在该文件夹下新建 `book.py` 文件，并加入以下内容：

```py
from sqlalchemy import Column, String, Integer

from lin.interface import InfoCrud as Base


class Book(Base):
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    author = Column(String(30), default='未名')
    summary = Column(String(1000))
    image = Column(String(50))
```

我们新建了一个 `Book` 的 Model，该模型继承自 `InfoCrud`，有关于 `InfoCrud` 的详细，将在[后续](./authority_and_models.md)详细介绍，本章我们注重于 CMS 的开发使用。

有了该模型后，我们打开根目录下的 `fake.py` 文件，并运行 `fake.py` 文件，如果你的操作正确，你的数据库将会在多出两条书籍的数据。

下面，我们继续完善 `app/api/v1/book.py` 下的 `get_book` 函数，在上一步中，我们只是简单的返回了一条信息，但是在真正的开发中，数据库几乎是任何应用都摆脱不了的一环。

我们重写 `get_book` 函数：

```py
from lin.redprint import Redprint
from flask import jsonify
from lin.exception import NotFound
from app.models.book import Book

book_api = Redprint('book')


@book_api.route('/<id>', methods=['GET'])
def get_book(id):
    book = Book.query.filter_by(id=id).first() # 通过Book模型在数据库中查询id=`id`的书籍
    if book is None:
        raise NotFound(msg='没有找到相关书籍') # 如果书籍不存在，返回一个异常给前端
    return jsonify(book) # 如果存在，返回该数据的信息
```

在上面重写的 `book.py` 文件中，我们使用到了 `flask-sqlalchemy` 提供的便捷查询 API，详细使用请参考[官网](http://flask-sqlalchemy.pocoo.org/2.3/)。

至此，我们再次运行根目录下的 `starter.py` 文件，并通过 curl 再次访问`http://127.0.0.1:5000/v1/book/1`，我们会得到如下数据：

```bash
{
  "author": "Randal E.Bryant",
  "create_time": 1539702050000,
  "id": 1,
  "image": "https://img3.doubanio.com/lpic/s1470003.jpg",
  "summary": "********"
}
```

### 参数校验

在应用的开发中，尤其是在 Web 领域中，对于任何从用户传入的数据都是无规则可循的，我们无法去预测用户传入的数据，因此参数（数据）校验是开发中不可或缺的一环。

我们打开 `app/validators/forms.py` 文件，向其中添加如下内容：

```py
from wtforms import StringField
from wtforms.validators import DataRequired

from lin.forms import Form


class BookSearchForm(Form):
    q = StringField(validators=[DataRequired(message='必须传入搜索关键字')]) # 前端的请求参数中必须携带`q`
```

我们新建了一个 `BookSearchForm` 的校验类，当前端传入数据时必须携带 `q` 这个参数，它被用来查询书籍。

然后，我们在 `app/api/v1/book.py` 文件中新增一个视图函数 `search`:

```py
@book_api.route('/search', methods=['GET'])
def search():
    form = BookSearchForm().validate_for_api() # 对前端的参数进行校验
    q = '%' + form.q.data + '%' # 取出参数中的`q`参数，mysql的特性，加`%`进行模糊查询
    books = Book.query.filter(Book.title.like(q)).all() # 搜索书籍标题
    if books is None or len(books) < 1:
        raise NotFound(msg='没有找到相关书籍')
    return jsonify(books) # 返回书籍
```

最后，我们再次运行根目录下的 `starter.py` 文件，并通过 curl 再次访问 `http://127.0.0.1:5000/v1/book/search`，我们会得到如下数据：

```py
{
    "error_code": 10030,
    "msg": {"q": ["必须传入搜索关键字"]},
    "request": "GET  /v1/book/search"
}
```

很明显我们未输入参数 `q`，因此校验未通过。我们修改 url 为 `http://127.0.0.1:5000/v1/book/search?q=C`，会得到如下数据：

```py
[
  {
    "author": "（美）Brian W. Kernighan",
    "create_time": 1539702050000,
    "id": 2,
    "image": "https://img3.doubanio.com/lpic/s1106934.jpg",
    "summary": "在计算机发展的历史上，没有哪一种程序设计语言像C语言这样应用广泛。本书原著即为C语言的设计者之一Dennis M.Ritchie和著名计算机科学家Brian W.Kernighan合著的一本介绍C语言的权威经典著作。我们现在见到的大量论述C语言程序设计的教材和专著均以此书为蓝本。原著第1版中介绍的C语言成为后来广泛使用的C语言版本——标准C的基础。人们熟知的“hello,World\"程序就是由本书首次引入的，现在，这一程序已经成为众多程序设计语言入门的第一课。\n原著第2版根据1987年制定的ANSIC标准做了适当的修订．引入了最新的语言形式，并增加了新的示例，通过简洁的描述、典型的示例，作者全面、系统、准确地讲述了C语言的各个特性以及程序设计的基本方法。对于计算机从业人员来说，《C程序设计语言》是一本必读的程序设计语 言方面的参考书。",
    "title": "C程序设计语言"
  }
]
```

### 自定义异常

在刚才的图书搜索 API 中，当程序没有找到相关的书籍时，会抛出一个 `NotFound` 的异常。`NotFound` 是 Lin 基础库提供的一种异常，现在有如下需求：我们需要自定义一个 `BookNotFound` 的异常来专门表示图书未找到。打开 `app/libs/error_code.py`，在其中添加如下内容：

```py
class BookNotFound(APIException):
    code = 404 # http状态码
    msg = '没有找到相关图书' # 异常信息
    error_code = 80010 # 约定的异常码
```

:::warning
`BookNotFound`异常继承自`APIException`，所有继承自`APIException`的子类异常均会被框架的异常处理机制所捕捉到，并以固定的信息结构返回给前端，方便前端快速捕捉错误。
在`code`、`msg`和`error_code`中，msg 和 error_code 异常重要，msg 能直接的告诉前端错误信息，error_code 可以让前端快速判断是何种异常。
:::

然后更改图书搜索未找到图书的异常：

```py
@book_api.route('/search', methods=['GET'])
def search():
    form = BookSearchForm().validate_for_api()
    q = '%' + form.q.data + '%'
    books = Book.query.filter(Book.title.like(q)).all()
    if books is None or len(books) < 1:
        raise BookNotFound()
    return jsonify(books)
```

再次运行程序，如果未找到图书，则前端会得到如下提示信息：

```py
{
    "error_code": 80010,
    "msg": '没有找到相关图书',
    "request": "GET  /v1/book/search"
}
```

## 小结

到此，我们通过 `starter` 完成了一个简单的图书 API 的开发，我们使用了如下几点：

- 使用红图细粒度的创建 API
- 使用 Model 层创建和查询数据
- 使用 WTForms 来校验参数
- 继承 APIException 来自定义异常

当然在本章中，我们只是一个快速上手的指导，如果你熟悉 `Flask` 及其生态，那么你完全可以按照此种模式开发自己的应用，后续我们会讨论项目开发的基础约定和流程。

<RightMenu />
