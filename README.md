# A simple online HTML generate SCSS tool

## Usage
1. Online tool url:<br>
https://editcue.github.io/HtmlGenScss/
2. Copy html text into left/top textarea
3. Click "Copy SCSS/HTML" button

## Genearte SCSS selector rule
1. If html tag has id attribute, use id attribute value as selector 
2. If html tag has class attribute, use class attribute value as selector
3. If html tag has no id and class attribute, use random 6 bits long start with c classname as selector , eg:`C400b1b`
4. The scss use nested structure as default, eg:
```scss
#ccd.e2c22 {
    .C400b1b {
    }
}
```