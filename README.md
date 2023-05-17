# A simple online HTML generate SCSS tool

## Usage
1. Online tool:
https://editcue.github.io/html-generate-scss-online-tool/
2. Copy html text into left/top textarea
3. Click "Copy SCSS/HTML" buttons

## Generate SCSS selector rule
1. If html tag has id attribute, use id attribute value as selector 
2. If html tag has class attribute, use class attribute value as selector
3. If html tag has no id and class attribute, use random 6 digital hex long and start with `C` classname as selector , eg:`C400b1b`, and add random classname to html tag class attribute
4. The scss use nested structure as default, eg:
```scss
#ccd.e2c22 {
    .C400b1b {
    }
}
```

- process flow:<br>
  id -> class -> random class（eg:C400b1b）

[中文说明](README.zh.md)