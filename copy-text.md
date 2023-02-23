---
title: 怎么用js复制文本，顺便提示复制成功
tags: js
categories: js
theme: vue-pro
highlight:
---

=。=，最近需要一个复制的功能，顺手提示复制成功，虽然以前写过，但总是忘记，索性又封装了一个库，便于以后使用。

```js
// npm i cp-text
import cpText from 'cp-text';
cpText('任意字符串内容');
```

以下是点击复制图标，触发复制

```jsx
<img
  onClick={() => cpText(location.href)}
  width="20"
  src="https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy.png"
/>
```

默认复制之后，会自动提示-复制成功：
![copy_demo](https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy_demo.png)

## 原理

主流方案：[execCommand 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)，兼容性好，需要借助下表单元素。

现代方案：[Clipboard API](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API)，现代浏览器兼容性基本没问题，这个是异步，稍微注意下

## 源码

```js
/**
 * 复制文本，并提示复制成功
 * @params text需要复制的字符串 isShowTip默认是true
 *
 * <img onClick={()=>cpText(url)} width="20" src='https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy.png'/>
 */
export const cpText = async (text, isShowTip = true) => {
  const clipboard = navigator.clipboard;
  clipboard ? await clipboard.writeText(text) : copyByInput(text);
  isShowTip && showTip();
};
function copyByInput(text) {
  alert(text);
  // 创建input元素
  const input = document.createElement('input');
  // 赋值 - 想要复制的内容
  input.value = text;
  // 插入到文档
  document.body.appendChild(input);
  // 隐藏
  input.style.cssText = `position:fixed;clip:rect(0 0 0 0);top:10px`;
  // 选中
  input.select();
  // 复制
  document.execCommand('copy');
  // 移除input
  document.body.removeChild(input);
}
function showTip() {
  const eleTip = document.createElement('span');
  eleTip.innerHTML = '复制成功 ~ ';
  eleTip.style.cssText =
    'z-index:3333;position:absolute;top:40%;left:45%;padding:6px 12px;background-color:#333;color:#fff;font-size:14px;border-radius:6px;font-family:sans-serif;';
  document.body.appendChild(eleTip);
  setTimeout(() => {
    eleTip?.parentNode?.removeChild(eleTip);
  }, 1000);
}

export default cpText;
```

## 引用

- [鑫旭大佬的JS复制文字到剪切板的极简实现及扩展](https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/)