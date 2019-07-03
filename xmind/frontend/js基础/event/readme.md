## [JavaScript事件流原理解析](https://www.cnblogs.com/st-leslie/p/5907556.html)

一个完整的JS事件流是从window开始，最后回到window的一个过程

事件流被分为三个阶段(1~5)捕获过程、(5~6)目标过程、(6~10)冒泡过程

重要属性
type: 触发事件的类型;
bubbles: 表名事件是否冒泡;
cancelable: 表名是否可以取消事件的默认行为;
currentTarget: 当前正在处理事件的元素;
target: 事件的目标元素;
defaultPrevented: 表名是否已经调用了preventDefault()方法;
detail: 与事件相关的细节信息;
eventPhase: 表示事件处理的阶段: 1,捕获阶段; 2,处于阶段; 3,冒泡阶段;
trusted: true表示该事件是浏览器生成的, false表示是开发人员通过JavaScript创建的;
view: 与事件关联的抽象视图, 相当于发生事件的window对象;
preventDefault(): 取消事件的默认行为;
stopImmediatePropagation(): 取消事件的进一步获取或者冒泡, 同时阻止任何事件处理程序被调用;
stopPropagation(): 取消事件的进一步获取或者冒泡;

## 自定义事件, getEventListeners

getEventListeners 函数可以用来获取一个dom元素的事件侦听器。

如：getEventListneres(wiondow).load 会返回一个侦听window.load事件的侦听器数组。

可以调用一个侦听器的remove方法来移除一个侦听器。

如 getEventListneres(wiondow).load[0].remove()可以移除第一个侦听器。其他以此类推。

## 事件代理

https://www.cnblogs.com/starof/p/4066381.html

## [passive 的事件监听器](https://www.cnblogs.com/ziyunfei/p/5545439.html)

https://my.oschina.net/reter/blog/1922661