# 流数据 #


----------

可以把数据流看成特殊的数组，只不过数组中的数据分散在空间上，而数据流中的数据是分散在时间上的。通过将数据一块一块地传送，开发人员可以每收到一块数据就开始处理，而不用等所有数据都到全了再做处理。

Node中也有可写数据流，可以往里写数据块。当HTTP服务器上有请求过来时，对其进行响应的res对象就是可写数据流的一种。

可读和可写数据流可以连接起来形成管道，就像shell脚本中用的|（管道）操作符一样。这
是一种高效的数据处理方式，只要有数据准备好就可以处理，不用等着读取完整个资源再把它写
出去。