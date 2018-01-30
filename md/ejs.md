ejs


----------

- ejs标签：

	- `<% code %>`： JavaScript代码；
	- `<%= code %>`：显示替换过HTML特殊字符的内容，code中的内容的所有特殊字符会被转义为HTML实体码；
	- `<%- code %>`：显示原始HTML内容，code中的内容不会被转义；
	- `<%: code %>`和`<%=: code %>`，过滤器标签，在ejs开始标签添加一个冒号；
			
			// 过滤器以管道符分割，value会被放进过滤器last中处理，后面还可以用管道符接更多过滤器
			<%=: value | last %>
		
		- `last`，获取数组最后一个元素；
		- `fist`，获取数组第一个元素；
		- `get: item/prop`，获取数组第item个元素，从0开始计数，或获取对象prop属性；
		- `capitalize`，将第一个字母变为大写；
		- `truncate: length`，截取文本length长度；
		- `truncate_words: length`，截取文本length个单词；
		- `replace: reg/text,  text`，用text替换满足reg正则或text文本的内容；
		- `append： text`，在文本末尾添加内容text；
		- `prepend: text`，在文本开始添加内容text；
		- `sort`，数组排序，跟JS数组sort默认一致；
		- `map: prop`，返回一个满足prop属性的数组；

				// 自定义过滤器
				var ejs = require('ejs');
				// 函数可以接收多个参数，使用时：filterName: arg1, arg2
				// 第一个参数就是输入值、上下文或前一个过滤器的结果
				ejs.filters.filterName = function (value, arg1, arg2) {
					// 处理value并返回一个值
				}

- `ejs.render(str, dataObj)`，ejs解析方法，str是模板的字符串，dataObj是传入模板的数据；

		var ejs = require('ejs');
		var data = {
			name: 'Tom',
			age: 27
		};
		var template = '<%= person.name %>';
		var output = ejs.render(tempalte, {
			person: data // 将模板中的数据对象person指向对象data
		});
			
		// 然后将编译结果output输出

- ejs模板缓存，读取缓存模板会跳过编译，速度更快，开发环境不需要，生成环境推荐；

		var output = ejs.render(str, {
			dataObj: targetObj, // 数据对象指向的目标对象
			cache: cache, // 启用缓存
			filename: filename // 缓存文件指向的的文件名称
		});

		