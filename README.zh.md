# 一个简单的在线HTML生成SCSS工具

## 用法

1. 在线工具：https://editcue.github.io/HtmlGenScss/

2. 将 html 文本复制到左/顶部文本区域

3. 点击“Copy SCSS/HTML”按钮

## 生成 SCSS 选择器规则

1. 如果html标签有id属性，使用id属性值作为选择器

2. 如果html标签有class属性，使用class属性值作为选择器

3. 如果html标签没有id和class属性，使用随机6位长十六进制，以`C`开头作为类名选择器，比如:`C400b1b`，并且把随机的类名添加到html标签的class属性中

4. scss默认使用嵌套结构，例如：

```scss

#ccd.e2c22 {

	.C400b1b {
	
	}

}

```

- 处理流程:<br>
id -> class -> 随机class（例如:C400b1b）