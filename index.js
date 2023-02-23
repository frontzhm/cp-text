/**
 * 复制文本，并提示复制成功
 * @params text需要复制的字符串 isShowTip默认是true
 * 
 * <img onClick={()=>cpText(url)} width="20" src='https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy.png'/>
 */
export const cpText = async (text, isShowTip = true) => {
  const clipboard = navigator.clipboard
  clipboard ? await clipboard.writeText(text) : copyByInput(text)
  isShowTip && showTip()
}
function copyByInput(text) {
  alert(text)
  // 创建input元素
  const input = document.createElement('input');
  // 赋值 - 想要复制的内容
  input.value = text
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
  eleTip.style.cssText = "z-index:3333;position:absolute;top:40%;left:45%;padding:6px 12px;background-color:#333;color:#fff;font-size:14px;border-radius:6px;font-family:sans-serif;"
  document.body.appendChild(eleTip)
  setTimeout(() => {
    eleTip?.parentNode?.removeChild(eleTip);
  }, 1000)
}


export default cpText
