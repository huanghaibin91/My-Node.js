# CommonJS #


----------

CommonJS是node.js的模块规范。node.js模块：每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。


**模块**

Node.js模块有两类：一类是Node提供的模块，称为核心模块；另一类是用户编写的模块，称为文件模块。

node.js中的模块可以是一个文件或一个目录，如果是目录，Node通常会在这个目录下找一个index.js的文件作为模块的入口，或者在包的package.json中的main字段描述，当然也可以设置其他文件作为模块入口。

CommonJS模块特点：

- 所有代码都运行在模块作用域，不会污染全局作用域；
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存；
- 模块加载的顺序，按照其在代码中出现的顺序；

**module**

`module`是一个对象，它在模块内部，代表当前模块。

- `exports`， 是module对象的属性，用于定义模块对外的接口，这些属性可以是任意类型的数据，比如字符串、对象和函数。加载某个模块，其实是加载该模块的module.exports属性。可以在exports定义多个属性作为接口；

		var a = 1;
		var say = function (val) {
	  		console.log(val);
		};
		// 下面将a、say作为module.exprts的属性输出
		module.exports.a = a;
		module.exports.say = say;

		// 为了方便，Node为每个模块提供一个exports变量，指向module.exports，所以上面可以简写
		exports.a = a;
		exports.say = say;

`module.exports`，可以将module.exports重新指向，这会成为默认接口，一个模块文件只有一个module.exports默认接口，当模块存在module.exports时，引用模块就是引用module.exports，其余exports会被忽略。

		var say = function (val) {
  			console.log(val);
		};
		// 下面将module.exports对象重写为say作为默认接口输出，模块的对外接口，一般就是一个单一的值时使用
		module.exports = say;
		// 不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系
		exports = say; // 这样重写exports不会输出默认接口，而是报错

		// 引用模块
		var a = 1;
		var b = require('a.js');
		b(1); // 直接使用，而不是做为引用对象的方法或属性使用


**require**

`require()`，require方法用于加载模块，以同步的方式。因为同步会阻塞程序运行，所以通常都在程序最初加载时才使用require和其他同步操作。

	// 引用a.js模块
	var b = require('a.js');
		
	var c = 3;
	b.say(c); // 3，可以使用say方法

require路径查找规则：

- 参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件；
- 参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件；
- 参数字符串不以“./”或“/”开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）；
- 参数字符串不以“./“或“/”开头，而且是一个路径，按路径为参数，找后续路径；
- 指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。.js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析；
- 想得到require命令加载的确切文件名，使用require.resolve()方法；


		