// 加md5（文件指纹）
fis.match('*.{js,css,png,jpg,jpeg}', {
	useHash: true
});

//对css,js,html文件进行压缩
fis.match('*.css',{
	optimizer: fis.plugin('clean-css')
});

fis.match('*.js',{
	optimizer: fis.plugin('uglify-js')
});

fis.match('*.png',{
	optimizer: fis.plugin('png-compressor')
});

fis.match('*.html',{
	//如果没有此插件需要先进行插件安装 npm install -g fis-optimizer-html-minifier
	optimizer: fis.plugin('html-minifier')
});

//将css,js和图片发布到static下
fis.match('*.{css,js,png,jpg,jpeg,gif}',{
	release: '/static/$0'
});

//引入打包合并插件
fis.match('::package',{
	postpackager: fis.plugin('loader',{
		allInOne: true
	})
});

//合并index.css和skin_hover.css
fis.match('*.css',{
	packTo: 'pkg/aio.css'
});

//合并index.js和changeskin.js和draggable.js
fis.match('*.js',{
	packTo: 'pkg/aio.js'
});

fis.media('debug').match('*.{js,css,png}',{
	useHash: false,
	useSprite: false,
	potimizer: null
});

fis.media('sprite').match('::package',{
	spriter: fis.plugin('csssprites')
});

fis.media('sprite').match('*.css',{
	useSprite: true
});
