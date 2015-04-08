# ICEBERG (harvesting project)

[![Join the chat at https://gitter.im/IlyaSuhodolskiy/iceberg-scss-start](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/IlyaSuhodolskiy/iceberg-scss-start?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Install and start

1. ```$ npm install```
2. ```$ gulp```


## Gulp

1. gulp-autoprefixer"
2. gulp-jsmin
3. gulp-minify-css
4. gulp-rename
5. gulp-sass
6. gulp-concat
7. imagemin-svgo


## CSS(SCSS) 

### Grid (12 columns)
1. phones (<768px) ``` .col-ph-* ```
2. tablets (≥768px) ``` .col-td-* ```
3. desktops (≥992px) ``` .col-dt-* ```
4. larger desktops (≥1200px) ``` .col-ld-* ```

### Mixins

1. @mixin opacity
2. @mixin circle
3. @mixin box-shadow
4. @mixin vertical-align
5. @mixin font-size
6. @mixin gradient

### Example create grid

```HTML
<div class="container">
	<div class="row">
		<div class="col-tb-6">
			<!-- ... -->
		</div>
		<div class="col-tb-6">
			<!-- ... -->
		</div>
	</div>
	<div class="row">
		<div class="col-ph-4">
			<!-- ... -->
		</div>
		<div class="col-tb-4">
			<!-- ... -->
		</div>
		<div class="col-tb-4">
			<!-- ... -->
		</div>
		<div class="col-tb-4">
			<!-- ... -->
		</div>
	</div>
</div>
```