#html和css常见问题总结
------------------以下为html----------------------------------------------  
一.html语义化的理解
优点：代码结构清晰，1.易于阅读，利于开发和维护2.提高用于体验，在样式加载失败时，页面结构清晰
3.方便其他设备解析（如屏幕阅读器）根据语义渲染网页。4.有利于搜索引擎优化（SEO），搜索引擎爬虫会根据不同的标签来赋予不同的权重
例举常见的有title，header，nav，h1~h5,canvas,footer,body等等
二.html5的新特性 
1.svg;
SVG适用于描述XML中的2D图形的语言
canvas与分辨率相关，不支持事件处理程序，svg不相关，矢量图形，放大不会失真，支持事件处理（适合具有大型渲染区域的应用）
Canvas随时随地绘制2D图形(使用JavaScript)
SVG是基于XML的，这意味着每个元素在SVG DOM中都可用。你可以为每个元素添加JavaScript事件处理程序
在SVG中，每个绘制的形状都会被记忆为一个对象。如果SVG对象的书香发生变化，浏览器可以自动重新渲染形状。
2.新增的video和audio标签
3.新的api：HTML Geolocation 地理位置--HTML Drag & Drop拖放--HTML Local Storage 本地存储--HTML Application Cache 应用程序缓存-HTML Web Workers web工作者--HTNL SSE
4.可以自定义标签名
5.语义元素转换为块元素：header，section，footer，nav，main等等
三。meta定义自适应
  1.<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  其中的缩放属性取值在0.0~10.0之间
  width=device-width----user-scalable=yes(用户可以手势控制缩放)
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> //强制使用ie最新内核模式渲染
  <meta name="format-detection" content="telephone=no">当该 HTML 页面在手机上浏览时，该标签用于指定是否将网页内容中的手机号码显示为拨号的超链接
  ......
  -----------------以下为css---------------------------------------------
  一浏览器盒模型：border-box和content-box, CSS属性设置方法
  content-box:总宽度为width+padding+border
  border-box模式:最终宽度就是设置的width=content+padding+border
二CSS定位方式，各种方式定位原则
  1.static，2.relative3.absolute，4.position:fixed；
  第一种，static:默认情况，正常显示
  第二种，relative:保留原来位置，不脱离文档流，经常用z-index分离
  第三种，absolute:脱离文档流，是整个元素的左上角（含margin）相对于最近的、非static定位的父元素的padding外边界或者说border内边界定位的;
  如果没有非static定位的父元素，则相对于“浏览器可视窗口”定位（不是body也不是html元素，而是屏幕的可视区的左上角（不含工具条）），经常与z-index属性进行层次分级
  第四种，fixed,脱离文档流，相对于整个浏览器窗口定位
  三，css选择器的优先级
  行内样式>Id选择器>类选择器，伪类选择器，属性选择器>元素选择器， 关系选择器，伪元素选择器>通配符选择器(全局:*)
  同等优先级，自上而下编译，下面的覆盖上面的(!importan无穷)
四css实现垂直居中方式
  1.margin:0 auto(水平居中)//position:relative;接着top:50%;margin-top:-0x0px;//自身高度
  2.父元素设置position:relative;本元素设置position:absolute;transform:translate(50%,-50%);top:50%;
  3.position:absolute;上下左右设置0，margin:auto;
  ----2和3都用了绝对定位------
  4.上下内填充相等，左右0，其他不设置;
  5.弹性布局1-父元素设置flex布局，align-items:center;text-align:center;
  6.弹性布局2-父元素设置flex布局，flex-directions:column;justify-content:center
  7.盒子里文字居中父元素设置table，子元素table-cell，vertical-align:center
五.css动画及动画js监听
---
六.伪类和伪元素的理解
  伪类的出现比如:first-child轻松的获取第一个子元素，弥补了CSS选择器的不足，用来更方便地获取信息。
  引:伪类存在的意义是为了通过选择器，格式化DOM树以外的信息以及不能被常规CSS选择器获取到的信息。
  伪元素:first-letter取到元素内容的first，还可以创建不存在的。
  的出现本质上是创建了一个虚拟容器(元素)，我们可以在其中添加内容或样式。
七.@import和两种加载CSS方式的区别
  <link href="外部CSS文件的URL路径" rel="stylesheet" type="text/css" />
  引用于https://www.cnblogs.com/yanggb/p/10381366.html
  <style type="text/css">
  @import + 空格 + url(外部CSS文件URL路径地址);
  </style>
  区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
  区别2：link引用CSS时，在页面载入时同时加载；@import需要页面完全载入后才加载。
  区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1中提出的，低版本的浏览器不支持。
  区别4：link支持使用JavaScript控制DOM去改变样式；@import不支持这样的操作（JavaScript可以获取link标签元素，但获取不到@import，因为@import只是一种CSS语法）。
  本质上，两者使用选择区别不大，但为了软件中编辑布局网页HTML代码，一般使用link较多，也推荐使用link。
  八.CSS预处理器less和Sass
  1.        基于CSS的另一种语言
  2.        通过工具编译成CSS
  3.        添加了很多CSS不具备的特性
  4.        能提升CSS文件的组织方式
-----用到再补充~~~~~
九..CSS弹性盒模型
  引自https://www.jianshu.com/p/5856c4ae91f2
  http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
  display:flex;
  flex-direction	指定弹性容器中子元素排列方式 row水平/column垂直
  flex-wrap	设置弹性盒子的子元素超出父容器时是否换行--nowrap/wrap
  flex-flow	flex-direction 和 flex-wrap 的简写--
  stretch	默认值。项目被拉伸以适应容器。
  center	项目位于容器的中心。
  flex-start	项目位于容器的开头。
  flex-end	项目位于容器的结尾。
  baseline	项目位于容器的基线上。
  align-items	设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式
  align-content	修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐
  justify-content	设置弹性盒子元素在主轴（横轴）方向上的对齐方式
--子元素属性待做补充
    order	设置弹性盒子的子元素排列顺序。
    flex-grow	设置或检索弹性盒子元素的扩展比率。
    flex-shrink	指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
  flex-basis	用于设置或检索弹性盒伸缩基准值。
  flex	设置弹性盒子的子元素如何分配空间。
  align-self	在弹性子元素上使用。覆盖容器的 align-items 属性。
十.float布局
  首先脱离了文档流，不脱离文本流可能导致高度塌陷
可以让行内元素设置宽高对自身的影响
float 元素可以形成块，如 span 元素。可以让行内元素也拥有宽和高，因为块级元素具有宽高，浮动元素的位置尽量靠上尽量靠左（float:left）或右（float:right），如果那一行满足不了浮动元素的宽度要求，则元素会往下掉
对兄弟元素的影响:不影响其他块级元素的位置,影响其他块级元素的文本,上面贴非 float 元素旁边贴 float 元素或者边框
对父级元素的影响:从布局上 “消失”,高度塌陷
浮动--left,right,
清楚浮动:clear:both;///--父元素:overflow:hidden,添加伪元素after，还有一种before和after双伪元素清除浮动。(缺点使用zoom1:1触发hasLayout)
绝对定位也会脱离浮动，相对定位会保留原来位置。存在于文档流之中。
