# cp-text

复制文本，并提示复制成功。

## 安装

```shell
npm i cp-text
```

## 使用

```js
import cpText from 'cp-text';
cpText('任意字符串内容');
```

默认复制之后，会自动提示：
![copy_demo](https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy_demo.png)

```js
// 不想要提示的话
cpText('任意字符串内容', false);
```

## 额外的复制图标

以下是点击复制图标，触发复制

```jsx
<img
  onClick={() => cpText(location.href)}
  width="20"
  src="https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/copy.png"
/>
```

复制图标，可以用下现成的 base64，`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEUAAAAkvY8kvpIku48kv5EkvpEkv5EkvpEjv5EjvpEjvZAlv5AiwJEkvpEkv5EkvpEkvpEjvpEjvZAjvpAjvZEiv48gupIkv5Ekv5IjvpElwZUmyZMkvpEjvZAjvpAkvpAjvpMkv5QjvpEjvpEjwpIkvpAkvpIkvpIkvZEkvpGdCVCPAAAAKXRSTlMAgL9Af5awzTSJVjAe6WX00Z15X0YQC7u3pBgGxHJNOSYj35Aq4m3bXdJrakYAAAK8SURBVHja7d3bbtpAFIXhbbs+YBtzPicQAkm73v8FC0WYVEXUkgfPzM767hBXvyw8c7EkhIiIiIiIiGzJPoNuTLK5PE8+RIfSXi7PkaFri6k8wwLdi8W8EjZ8HMW0HewoxbA32JHOxaw5LBmJYStYEolhKexIxLRJMkATzj+S7qyzGDex+KxCrS9eW6I2E59VqO3FZ3vUMvGaitcWQ1zEkLOwQ8vVoVo/KwRdSyolIUBaKQkBRlpCEGoJQawlBIGWEGy1hCRaQrB9VsiPs+Dm6+dH3zXXWw1xEz8Kcf2iVi5R6/scIrMUtcjnENmilnsdMkOt8jpEUlyN/Q4JcRUwhCEMYQhDGMIQhjCEIQxhCEP8CSmiVvYbJ0I2hz5a6vccCClhwqv9kAWMKGyHrGHG2HZIBjMS2yFHmBHbDpnBjNx2iIxgQmj/rSUJ2hu8ORAik3SAVpaBEyf7hY671glDGMIQhjCEIQw5YQhDGPINQnavQSuTqRMh2QKtvTgQksOE2H7IEEZMbYeUMKNnOySCGaHtkL2WJzKHkt+IBFreWvILOs4RkSxehq2M3TjZL1Tctc4YwhCGMIQhDGHICUMYwhD9IcU4CVsZubF8eFWyRekpWQdt+kr2Wm9aFnQ7LZvGUsvKdPOuZPcrkZYltpQvULGNF9nk46CVaO7EyX6h4a71B0MYwhCGMIQhDDlhCEMYwhCG/B0yi0ZJHJx4HhK9Axd+hxSAjpChkpASSkIiLSGFlhAZaAmZaAmRQEuIFIdh/+dL+JWfIQ78wwRDGPINQm7n0Vbu8iXkA1efcpcvISmuUrnLl5AEtZXc40tIhZvVbi3/8CXkCGsCMSpBQ66HRGjI9RAZoRnnQ2bvaMT5ECnQiPshsk7RgAchzYaYXoTIdIH/8SNEJI+HeMiXkJN5Ngm6JERERERERNSx35CrzRvCMm9UAAAAAElFTkSuQmCC`
