var gulp = require('gulp');

// 引入插件
var uglify = require('gulp-uglify'), // 压缩
	minifyCss = require('gulp-minify-css'), //css压缩
	minifyHtml = require("gulp-minify-html"),//html压缩
	concat = require('gulp-concat'), //文件合并
	stripDebug = require('gulp-strip-debug'), // 该插件用来去掉console和debugger语句
	useref = require('gulp-useref'), //压缩合并
	imagemin = require('gulp-imagemin'), //图片压缩
	pngquant = require('imagemin-pngquant'),
	rev = require("gulp-rev"),//对文件名加MD5后缀
	revCollector = require("gulp-rev-collector");//路径替换
	var clean = require('gulp-clean');

// 任务处理的文件路径配置
var paths = {
    js: [ // js目录
        'src/js/*'
    ],
    css: [
         'src/css/*'
    ],
    img: [
         'src/images/*'
    ],
    fonts: [
        'src/fonts/*'
    ]
}

// 定义develop task
var output = 'dist/'; // output 

/* 开发环境 */
// gulp.task('develop', function() {
//     gulp.src(paths.js)
//         .pipe(gulp.dest(output + '/js'));

//     gulp.src(paths.css)
//         .pipe(gulp.dest(output + '/css'));

//     gulp.src(paths.img)
//         .pipe(gulp.dest(output + '/images')); 

//     gulp.src(paths.fonts)
//         .pipe(gulp.dest(output + '/fonts')); 
// });


/* 部署环境 */
gulp.task('release', function() {

	// 压缩js 生成版本号
    gulp.src(paths.js)
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(output + '/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(output +'/rev/js'));
    
    // 压缩css 生成版本号
    gulp.src(paths.css)
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest(output + '/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(output +'/rev/css'));
    
    // fonts 生成版本号
    gulp.src(paths.fonts)
        .pipe(rev())
        .pipe(gulp.dest(output + '/fonts'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(output + '/rev/font'));

    // 压缩图片    
    gulp.src(paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(output + '/images'));

    


});

// 压缩HTML引进新文件版本
gulp.task('rev',['release'],function(){
	return gulp.src(['dist/rev/**/*.json', 'src/*.html'])
        .pipe(revCollector({
        	replaceReved:true,
        }))
        .pipe(minifyHtml({
                empty: true,
                spare: true
            })
        )
        .pipe(gulp.dest('dist'));
})

//清除文件任务 
gulp.task("clean",function(){
    gulp.src(['dist'], { read: false })
    	.pipe(clean());
})


// 监听文件改变
var watcher = gulp.watch('src/*', ['rev']);
watcher.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});

gulp.task('default', ['clean'], function(){
    gulp.start('release','rev');
});

// gulp.task('default', ['rev']);