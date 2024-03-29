let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  imageMin = require('gulp-image'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', async function () {
  del.sync('build')
})

gulp.task('scss', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('src/css'))


    .pipe(sass({
      outputStyle: 'compressed'
    }))

    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', function () {
  return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/swiper/swiper-bundle.css',
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('src/scss'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('script', function () {
  return gulp.src('src/js/*.js')
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  return gulp.src([
      'node_modules/swiper/swiper-bundle.js',

    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  });
});

gulp.task('export', function () {
  let buildHtml = gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'));

  let BuildCss = gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('build/css'));

  let BuildJs = gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'));

  let BuildFonts = gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));

  let BuildImg = gulp.src('src/images/**/*.*')
    .pipe(imageMin())
    .pipe(gulp.dest('build/images'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('src/*.html', gulp.parallel('html'))
  gulp.watch('src/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));