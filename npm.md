# NPM #


----------

- NPM是随同NodeJS一起安装的包管理工具

	- 允许用户从NPM服务器下载别人编写的第三方包到本地使用
	- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
	- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

- npm升级自身`npm install npm -g`

- npm安装模块`npm install <Module Name>`

	- `npm install <Module Name> -g` 全局安装的模块才能使用命令行工具，即才能在git、cmd
	中输入命令运行
	- `npm install gulp --save 或 npm install gulp -S` -S, --save 安装包信息将加入到dependencies（生产阶段的依赖），如vue.js，缺了项目就跑不起来
	- `npm install gulp --save-dev 或 npm install gulp -D` -D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），如gulp，是开发阶段所用的工具，生产阶段不需要
	

- 模块引用，安装好之后，包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 `require('express')` 的方式就好，无需指定第三方包路径

- `npm list -g`查看所有全局安装的包

- `npm list <Module Name>`查看某个包的版本

- `package.json` 位于模块的目录下，用于定义包的属性:

	- `name` - 包名。

	- `version` - 包的版本号。

		- 兼容模块新发布的补丁版本：~1.1.0、1.1.x、1.1
		- 兼容模块新发布的小版本、补丁版本：^1.1.0、1.x、1
		- 兼容模块新发布的大版本、小版本、补丁版本：*、x
		- 没有其它符号就是精确版本，只支持设置的版本号
	
	- `description` - 包的描述。
	
	- `homepage` - 包的官网 url 。
	
	- `author` - 包的作者姓名。
	
	- `contributors` - 包的其他贡献者姓名。
	
	- `dependencies` - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

	- `devDependencies` - 开发环境下的包依赖列表

	- `scripts` - npm 允许在package.json文件里面，使用scripts字段定义脚本命令，命令行下使用npm run命令执行脚本命令，`npm run`查看所有脚本命令
			
			{  
				// ...
				"scripts": {  // 脚本命令build关联node build.js，这样执行npm run build就会执行node build,js
					"build": "node build.js" 
				} 
			}
	
	- `repository` - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
	
	- `main` - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
	
	- `keywords` - 关键字

- `npm uninstall <Module Name>` 卸载模块

- `npm update <Module Name>` 更新模块

- `npm search <Module Name>` 搜索模块

- `npm help <command>` 可查看某条命令的详细帮助，例如npm help install

- `npm outdated` 检查模块是否已经过时

- 创建模块`npm init`，创建必需的package.json

	- `npm adduser` 注册用户
	- `npm publish` 发布模块，发布成功后就可以像其它模块一样使用了
	- `npm unpublish <package>@<version>` 可以撤销发布自己发布过的某个版本代码

- 模块版本号，语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新

    - 如果只是修复bug，需要更新Z位。
    - 如果是新增了功能，但是向下兼容，需要更新Y位。
    - 如果有大变动，向下不兼容，需要更新X位。

-npm scripts，npm脚本，npm 允许在package.json文件里面，使用scripts字段定义脚本命令，使用`npm run`可以查看当前所有的npm脚本命令

		{
		    // package.json中有一个script对象，他的每一个属性就对应一段脚本命令
		    "scripts": {
		    	"build": "node build.js"
		  	}
		}

		// git bash控制台执行脚本命令
		$ npm run build
		// 上面的命令等同于下面命令
		$ node build.js

四个常用的 npm 脚本有简写形式：

- `npm start`是`npm run start`；
- `npm stop`是`npm run stop`的简写；
- `npm test`是`npm run test`的简写；
- `npm restart`是`npm run stop && npm run restart && npm run start`的简写。


		
