# u-rem.js
This is a mobile end REM layout Library.

这是一个移动端REM布局库。

[![npm version](https://img.shields.io/npm/v/u-rem.js.svg?style=flat-square)](https://www.npmjs.org/package/u-rem.js)
[![npm downloads](https://img.shields.io/npm/dm/u-rem.js.svg?style=flat-square)](http://npm-stat.com/charts.html?package=u-rem.js)

## 安装(Install)
```
npm install u-rem.js --save
```
## 下载(Download)
https://unpkg.com/u-rem.js

## 使用(Use)
> 注意：
如果页面中没有添加meta[name=viewport]引入库后，会自动添加。

### 引入
默认以设计稿宽度 750px 为基础。
```
<script src="./node_modules/u-rem.js/u-rem.js"></script>
```
### 修改设计稿宽度
可以通过给script标签添加data-design属性修改设计稿宽度。
```
<script src="./node_modules/u-rem.js/u-rem.js" data-design="750"></script>
```

### 开发
如果设计稿测量的宽度为100px => 1rem。
```
***.css
/*
design 100px  ->  css 1rem
design 150px  ->  css 1.5rem
design 284px  ->  css 2.84rem
*/

.container{
	width:1rem;
	height:1.54rem;
}
.col{
	width:0.36rem;
	height:0.52rem;
}
```









