PC & mobile: 一个头部和左侧固定、内容移动、可无限加载并实时更新数据的高性能虚拟列表组件

PC: http://git.gw.com.cn:7990/projects/CLIY/repos/dzhyun-table/browse

- 多种方式分别优化 PC 和 mobile 列表性能, 并选择最适合该业务场景的方法使用;

- PC 端: 
  + 通过 键盘左右键 和 左右虚拟滚动条拖动 进行内容区域左右移动; 
  + 通过 键盘上下键、pageup & pagedown、home & end、(上下虚拟滚动条拖动)以及鼠标滚轮 进行内容区域的上下滚动; 
  + 实现排序, 高亮, 列拖动, 改变列宽, 格式化数据等功能;

- mobile 端:通过监听 scroll 和 touchmove 事件实现列表内容区域移动; 实现排序, 高亮, 格式化数据等功能

