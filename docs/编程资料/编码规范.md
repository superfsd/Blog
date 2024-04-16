# 编码规范

## 什么是编码规范

- Coding standards are collections of rules and guidelines that determine the programming style, procedures, and methods for a programming language.
- Think of coding standards as a set of rules, techniques, and best practices to create cleaner, more readable, more efficient code with minimal errors. They offer a uniform format by which software engineers can use to build sophisticated and highly functional code.
- 编码规范是针对某种编程语言的，决定编程风格、过程和方法的一系列规则和指导方针的集合。
- 把编码规范看作是一套规则、技术和最佳实践，以创建更清爽、更可读、更有效的代码，并将错误降到最低。它们提供了一个统一的格式，软件工程师可以用它来构建复杂和功能强大的代码。

## 编码规范必要性

- 作为一名合格的软件工程师，出产物就应该具备工程的健壮性和美观性，因此编码规范是作为软件工程师的职业素养。
- 如果在学习编程的初期，已经认真学习过编码规范的话，那自然是没有什么任何问题的。
- 但是对于很多初学者来说，可能对这方面并没有重视起来，还是依据自己的想法对变量和方法等等随意命名。
- 代码不规范对于实现项目中的功能来说并没有什么太大的问题，这就好比一个人懂不懂礼貌一样，一样可以活的随心所欲。
- 而对我们亲手编写的代码有一个规范化的管理则是我们对编程的一个最基本的尊重。
- 所以非常建议初学者们一定要对编码规范多用点心，只要初期对这方面有一个基本的认知就可以养成一个好习惯，摆脱杂乱无章的代码啦！
- 如果没有预先规定所有团队成员应该遵守的规范，会导致降低工程师的积极性、增加开发时间、产生复杂的代码结构等等情况。

- 如果没有编码规范，团队中的每个人都按自己的编码风格来。在不久的将来，维护和调试代码将变得不容易。

- 有一套编码标准在手，更容易保持代码的清晰和易于协作。当然，标准因应用、性质、行业、项目、开发人员技能和多种因素而不同。  
对于一个开发团队来说，在开发过程中拥有适当的编码规范和标准是至关重要的，这将有助于团队保持代码质量，并减少新的开发人员试图理解复杂的代码库所花费的时间。

## 编码规范优点

- 可有效的提高代码质量，并易于维护
- 减少代码的复杂性
- 易于团队合作，降低开发成本
- 为不同工程师创建的代码提供统一规范
- 创建出可复用的代码
- 使得检测错误更加容易
- 使代码更简单，更可读，更容易维护
- 促进更合理的编程实践，提升程序员的效率，更快完成目标
- 编码指南有助于在早期阶段发现错误，所以它有助于减少软件项目的额外成本。
- 减少了开发软件的隐藏成本。

## 命名规范

C# 的命名有两种约定：**帕斯卡拼写法(Pascal)** 和 **驼峰命名法(camelCasing)**

- 帕斯卡拼写法(Pascal): 成员名的每个单词的首位字母大写，如：Student，StudentName，StudentParentName。
- 驼峰命名法(camelCasing)：成员名除了第一个单词外其余首字母都大写，student，studentName，studentParentName.

## 帕斯卡拼写法(Pascal)

- class、record及record的参数、struct的名称，如：

```C#
public class DataService{ }

public record PhysicalAddress(
    string Street,

    string City,

    string StateOrProvince,

    string ZipCode
);

public struct ValueCoordinate
{

}
```

- 命名 interface 时，使用 pascal 大小写并在名称前面加上前缀 I。 这可以清楚地向使用者表明这是 interface。

```C#
public interface IWorkerQueue
{

}
```

- public的成员也应为Pascal命名，这些成员包括字段、属性、事件。方法名也应遵循Pascal命名，无论其是否是public。如：

```c#
public class ExampleEvents
{
    //公共字段
    public bool IsValid;

    //公共属性
    public IWorkQueue WorkQueue{get;set;}

    //公共事件
    public event Action EventProcessing;

    //公共方法
    public void Run()
    {

    }
}
```

- 编写位置记录时，对参数使用 pascal 大小写，因为它们是记录的公共属性。

```C#
public record PhysicalAddress
(
    string Street,
    string City,
    string StateOrProvince,
    string ZipCode,
    int Id,
    string SN 
);
```

## 驼峰命名法(camelCasing)

- 命名private或internal字段时使用驼峰命名，且字段名应以_开头。如：

```C#
public class DataService
{
    private IWorkerQueue _workerQueue;
}
```

- 编写方法的参数名时，也应该以驼峰命名，如：

```C#
public T SomeMethod<T>(int someNumber, bool isValid,int id)
{

}
```

## 其他命名约定

- 在不包括 using 指令的示例中，使用命名空间限定。

- 如果你知道命名空间默认导入项目中，则不必完全限定来自该命名空间的名称。 如果对于单行来说过长，则可以在点 (.) 后中断限定名称，如下面的示例所示。

```C#
var currentPerformanceCounterCategory = new System.Diagnostics.PerformanceCounterCategory();
```

- 不必更改使用 Visual Studio 设计器工具创建的对象的名称以使它们适合其他准则。
  - 代码中当且仅当私有成员可以使用下划线_开始
  - 代码中的命名严禁使用拼音与英文混合的方式，更不能允许直接使用中文的方式。
  - 常量命名全部大写，单词间用下划线隔开，力求语意表达完整清楚，不要嫌名字长。
    - 正例：MAX_XIAOY_COUNT
    - 反例：MAX_xiaoy_COUNT

- 抽象类 命名使用 Abstract或Base开头；异常类命名使用Exception结尾；测试类命名以它要测试的类名称开始，以Test结尾。

```C#
/// <summary>
/// 抽象类命名
/// <summary>
public void AbstractLearnProgramming()
{

}

/// <summary>
/// 异常类命名
/// <summary>
public void LearnProgrammingException()
{

}

/// <summary>
/// 测试类命名
/// <summary>
public void LearnProgrammingTest()
{

}
```

- 如果使用了设计模式，建议在类名中体现出具体模式。

说明：将设计模式体现在名字中，有利于阅读者快速理解架构设计思想。  
例如：

```C#
public class SysuserController

public class OrderFactory

public class TcpProxy
```

- 枚举 类名建议带上E前缀或Enum后缀，枚举成员名称需要全大写，单词间用下滑线隔开。

    说明：枚举其实就是特殊的常量类i，切构造方法被默认强制是私有。  
    正例：枚举名字：EState / DealStatusEnum  
    成员名：SUCCESS / UNKOWN_REASON

## 布局规范

- 使用默认的代码编辑器设置（智能缩进、4 字符缩进、制表符保存为空格）。

- 每行只写一条语句。

正确规范

```C#
int age = 20;

int score = 90;
```

错误示范

```C#
int age = 20; int score = 90;
```

- 每行只写一个声明。

- C# 的大括号采用的是Allman style，大括号单独一行。以下是正确的：

```C#
/// <summary>
/// 正确示范
/// </summary>
public void StartGame()
{

}

/// <summary>
/// 错误示范
/// </summary>
public void StartGame(){

}
```

- 如果连续行未自动缩进，请将它们缩进一个制表符位（四个空格）。

- 在方法定义与属性定义之间添加至少一个空白行。

```C#
public string Name { get; set; }

public void StartGame()
{

}
```

- 使用括号突出表达式中的子句，如下面的代码所示。

```C#
if ((val1 > val2) && (val1 > val3))
{
  // Take appropriate action.
}
```

- if / for / while / switch / do 等保留字与左右括号之间都必须加空格。

- 任何运算符左右必须加一个空格。

    说明：运算符包括赋值运算符 = 、逻辑运算符&&、加减乘除符号、三目运算符等。

- 方法参数在定义和传入时，多个参数逗号后必须加空格。  
正例：下例中实参的 ” a ” ，后边必须要有一个空格。

```C#
XIaoYMethod("a", "b", "c");
```

## 注释规范

- 将注释放在单独的行上，而非代码行的末尾。

```C#
//正确示范
// 定义age并初始化. Define age and init.
int age = 20;

//错误示范
int age = 20;//定义age并初始化
```

- 类方法的注释必须使用C# Summary 规范，以大写字母开始注释文本。

```C#
/// <summary>
/// Start the text with a capital letter.
/// </summary>
public void StartGame()
{

}
```

说明：在vs中，Summary方式会提示相关的注释，生成Summary可以正确输出相应的注释。工程调用方法是，不进入方法，即可悬浮提示方法、参数、返回值的意义，提高阅读效率。

- 以句点结束注释文本。

- 在注释分隔符 (//) 与注释文本之间插入一个空格，如下面的示例所示。

```C#
// The following declaration creates a query. It does not run

// the query.
```

- 请勿在注释周围创建格式化的星号块。

- 请确保所有公共成员Public都有必要的注释，从而提供有关其行为的适当说明。

- 所有的抽象方法（包括接口中的方法）必须使用Summary注释，除了返回值、参数、异常说明外，还必须指出该方法做了什么事，实现了什么功能。  
说明：对于子类的实现要求，或者调用注意事项，请一并说明。

- 方法内部单行注释，在被注释语句上方另起一行，使用 // 注释。方法内部多行注释使用 /\* \*/ 注释，注意与代码对齐。

- 语气 “ 半吊子 ” 英文来注释，不如用中文注释把问题说清楚。但专有名字与关键字保持英文原文即可。  
反例： “ TCP连接超时 ” 解释成 “ 传输控制协议连接超时 ” ，理解反而费脑筋。

- 代码修改的同事，注释也要进行相应的修改，预期是参数、返回值、异常、核心逻辑等的修改。

- 注释掉的代码尽可能而配合说明，而不是简单的注释掉说明。

- 代码被注释掉有两种可能性：

1. 后续会恢复此段代码逻辑。
2. 永久不用。前者如果没有备注信息，难以知晓注释动机。后者建议直接删掉（代码仓库保存了历史代码）。

- 对于注释的要求：

1. 能够准确反应设计思想和代码逻辑；
2. 能够描述业务含义，使别的程序员能够迅速了解到代码背后的信息。

> 完全没有注释的大段代码，对于阅读者形同天书，注释是给自己看的，即使隔很长时间，也能够清晰理解当时的思路；  
> 注释也是给继任者看的，使其能够快读接替自己的工作。

- 好的命名、代码结构是自解释的，注释力求精简准确，表达到位。  
避免出现注释的一个极端：过多滥的注释，代码逻辑一旦修改，修改注释是相当大的负担。

- 特殊注释标记，请注明标记人与标记时间。  注意及时处理这些标记，通过标记扫描，经常清理此类标记。线上故障有时候就是来源于这些标记处的代码。  
  - 待办事宜（TODO）：（标记人、标记时间，[预计处理时间]）表示需要实现，但目前还未实现的功能。

## 代码规范/语言准则

## 字符串数据类型

- 使用字符串内插来连接短字符串，如下面的代码所示。

```C#
string displayName = $"{nameList[n].LastName}, {nameList[n].FirstName}";
```

- 若要在循环中追加字符串，尤其是在使用大量文本时，请使用 StringBuilder 对象。

```C#
var phrase = "xiaoYxiaoYxiaoYxiaoYxiaoYxiaoY";

var manyPhrases = new StringBuilder();

for (var i = 0; i < 10000; i++)
{
    manyPhrases.Append(phrase);
}
```

## 隐式类型本地变量

- 当变量类型明显来自赋值的右侧时，或者当精度类型不重要时，请对本地变量进行隐式类型化。

```C#
var var1 = "This is clearly a string.";

var var2 = 27;
```

- 当类型并非明显来自赋值的右侧时，请勿使用 var。 请勿假设类型明显来自方法名称。 如果变量类型为 new 运算符或显式强制转换，则将其视为明显来自方法名称。

```C#
int var3 = Convert.ToInt32(Console.ReadLine());
int var4 = ExampleClass.ResultSoFar();
```

- 请勿依靠变量名称来指定变量的类型。 它可能不正确。 在以下示例中，变量名称 inputInt 会产生误导性。 它是字符串。

```C#
var inputInt = Console.ReadLine();
Console.WriteLine(inputInt);
```

- 使用隐式类型化来确定 for 循环中循环变量的类型。
  下面的示例在 for 语句中使用隐式类型化。

```C#
var phrase = "xiaoYxiaoYxiaoYxiaoYxiaoYxiaoY";

var manyPhrases = new StringBuilder();

for (var i = 0; i < 10000; i++)
{
    manyPhrases.Append(phrase);
}
```

- 不要使用隐式类型化来确定 foreach 循环中循环变量的类型。 在大多数情况下，集合中的元素类型并不明显。 不应仅依靠集合的名称来推断其元素的类型。
  下面的示例在 foreach 语句中使用显式类型化。

```C#
foreach (char ch in laugh)
{
    if (ch == 'h')
        Console.Write("H");
    else
        onsole.Write(ch);
}

Console.WriteLine();
```

## 无符号数据类型

通常，使用 int 而非无符号类型。 int 的使用在整个 C# 中都很常见，并且当你使用 int 时，更易于与其他库交互。

## 数组

当在声明行上初始化数组时，请使用简洁的语法。 在以下示例中，请注意不能使用 var 替代 string[] 。

```C#
string[] xiaoY = { "x", "i", "a", "o", "Y" };
```

如果使用显式实例化，则可以使用 var。

```C#
var xiaoY = new string[] { "x", "i", "a", "o", "Y" };
```

## 委托

在用到委托时尽量使用 Func<> 和 Action<>，而不是自定义委托类型。 在类中，定义委托方法。

```C#
public static Action<string> ActionExample1 = x => Console.WriteLine($"x is: {x}");

public static Action<string, string> ActionExample2 = (x, y) =>

Console.WriteLine($"x is: {x}, y is {y}");

public static Action<string> ActionExample3 = X;

static void X(string s)
{
    Console.WriteLine($"x is: {s}");
}

public static Func<string, int> FuncExample1 = x => Convert.ToInt32(x);

public static Func<int, int, int> FuncExample2 = (x, y) => x + y;
```

如果创建委托类型的实例，请使用简洁的语法。 在类中，定义委托类型和具有匹配签名的方法。

```C#
public delegate void Del(string message);

public static void DelMethod(string str)
{
    Console.WriteLine("DelMethod argument: {0}", str);
}
```

创建委托类型的实例，然后调用该实例。 以下声明显示了紧缩的语法。

```C#
Del exampleDel2 = DelMethod;

exampleDel2("Hey xiaoY");
```

以下声明使用了完整的语法。

```C#
Del exampleDel1 = new Del(DelMethod);

exampleDel1("Hey xiaoY");
```

## 异常处理

- try-catch 和 using 语句正在异常处理中,在平时使用异常处理时一般都使用 try-catch 语句。我们可以使用 using 来简化代码，简化资源的Dispose。
如果具有 try-finally语句（该语句中 finally 块的唯一代码是对 Dispose 方法的调用），可使用 using 语句代替。

如：

```C#
Font font1 = new Font("Arial", 10.0f);

try
{
    byte charset = font1.GdiCharSet;
}
finally
{
    if (font1 != null)
    {
        ((IDisposable)font1).Dispose();
    }
}
```

可使用using简化为：

```C#
using (Font font2 = new Font("Arial", 10.0f))
{
    byte charset2 = font2.GdiCharSet;
}
```

在C# 8中可以进一步简化：

```C#
using Font font3 = new Font("Arial", 10.0f);

byte charset3 = font3.GdiCharSet;
```

- 异常不要用来做流程控制，条件控制。因为异常的处理效率比条件分支低。

- 大段代码进行try-catch，这是不负责任的表现。catch时请分清稳定代码合肥稳定代码，稳定代码指的是无论如何都不会出错的代码。对于费稳定代码的catch尽量可能的进行区分异常类型，再做对应的异常处理。

- 捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，就将该异常抛给他的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容。

- 有try块放到了事务代码中，catch异常后，如果要回滚事务，一定要注意手动回滚事务。

- finally块必须对资源对象、流对象进行关闭，有异常也要做tyr-catch。

- 捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。  
说明：如果预期对方抛的是绣球，实际接到的是铅球，就会产生意外情况。

- 方法的返回值可以是null，不强制返回空集合或空对象等，必须添加注释充分说明什么情况下会返回null值。调用方进行null判断，防止NRE空引用异常问题（NullReferenceException）。

## && 和 \|\| 运算符

若要通过跳过不必要的比较来避免异常并提高性能，请在执行比较时使用 &&（而不是 &）和 \|\|（而不是 \|），如下面的示例所示。

```C#
Console.Write("Enter a dividend: ");

int dividend = Convert.ToInt32(Console.ReadLine());

Console.Write("Enter a divisor: ");

int divisor = Convert.ToInt32(Console.ReadLine());

if ((divisor != 0) && (dividend / divisor \> 0))
{
    Console.WriteLine("Quotient: {0}", dividend / divisor);
}
else
{
    Console.WriteLine("Attempted division by 0 ends up here.");
}
```

如果除数为 0，则 if 语句中的第二个子句将导致运行时错误。

但是，当第一个表达式为 false 时，&& 运算符将发生短路。 也就是说，它并不评估第二个表达式。 如果 divisor 为 0，则 & 运算符将同时计算这两个表达式，这会导致运行时错误。

## new 运算符 使用对象初始化值设定简化对象创建

使用对象初始值设定项简化对象创建，如以下示例中所示。

```C#
var student1 = new ExampleClass 
{ 
    Name = "xioaY", ID = 001,
    sex = "man", Age = 24 
};
```

下面的示例设置了与前面的示例相同的属性，但未使用初始值设定项。不建议使用

```C#
var student2 = new ExampleClass();

student2.Name = "xiaoYY";

student2.ID = 002;

student2.sex = "man";

student2.Age = 20;
```

## 事件处理

如果正在定义一个稍后不需要删除的事件处理程序，请使用 lambda 表达式。

```C#
public Form1()
{
    this.Click += (s, e) =>
    {
    MessageBox.Show(
    ((MouseEventArgs)e).Location.ToString());
    };
}
```

Lambda 表达式缩短了以下传统定义。

```C#
public Form1()
{
    this.Click += new EventHandler(Form1_Click);
}

void Form1_Click(object? sender, EventArgs e)
{
    MessageBox.Show(((MouseEventArgs)e).Location.ToString());
}
```

## 静态成员

使用类名调用 static 成员：ClassName.StaticMember。  
这种做法通过明确静态访问使代码更易于阅读。 请勿使用派生类的名称来限定基类中定义的静态成员。

编译该代码时，代码可读性具有误导性，如果向派生类添加具有相同名称的静态成员，代码可能会被破坏。

## OOP面向对象规约

- 避免通过一个类的对象引用访问此类的静态变量或静态方法，无谓增加编译器解析成本，直接用类名来访问即可

- 不能使用过时的类或方法（[Obsolate]标识）  

>说明：C#中对于标记过时的方法，有可能会在新版本的.Net Framework中剔除，因此不建议继续使用此类或方法。

- Object 的Equals方法容易抛空引用异常，应使用常量或确定有值得对象来调用Equals。

```C#
//反例
"XiaoY".Equals(gameObject.tag);

//正例
gameObject.tag.Equals("XiaoY");
```

- 构造方法中禁止加入业务逻辑，如有初始化逻辑等，请放在Init() 方法中。

- 当一个类有多个构造方法，或多个同名方法，这些方法应该按照顺序放置在一起，便于阅读。

- 类内方法定义顺序依次是：常量、字段、属性、方法，按照public -\> protected -\> private 排序。

- 类成员与方法访问控制从严
  - 如果不允许外部直接通过new来创建对象，那么构造方法必须是private。
  - 工具类不允许有public或default构造方法。
  - 类非static成员变量并且与子类共享，必须是protected。
  - 类非static成员变量并且仅在本类使用，必须是private。
  - 类static成员变量如果仅在本类使用，必须是private。
  - 类成员方法只供内部调用，必须是private。
  - 类成员方法只对继承类公开，那么限制为protected

>说明：任何类、方法、参数、变量，严控访问范围，过宽泛的访问范围，不利于模块解耦。如果一个private的方法，想删除就删除，可是一个public的Service方法，或者一个public的成员变量，删除一下，造成的损失可能没办法完全掌控。所以在一开始创建该类时就应该将访问明码标价，防止后期出现其他问题。

## 控制语句

- 在一个switch块内，每个case要么通过break/return等来终止，要么注释说明程序将继续执行到哪一个case为止：在一个switch块内，都必须包含一个default语句，并且放在最后，即使它什么代码都没有。
- 在 if / else / for / while / do 语句中都必须使用大括号，即使只有一行代码，避免使用下面的形式： if (condition) do something…
- 循环体内的语句要考虑性能，以下操作尽量移至循环体外处理，如定义对象、变量、获取数据库连接
