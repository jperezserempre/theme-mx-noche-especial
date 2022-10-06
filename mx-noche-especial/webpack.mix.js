let mix = require('laravel-mix');
require('laravel-mix-eslint');
require('laravel-mix-clean');

const proxy = 'https://devdesktop.dd:8443/' || null;

/*
 |--------------------------------------------------------------------------
 | DO NOT EDIT BELOW
 |--------------------------------------------------------------------------
 */

mix
  // Scripts
  .js('sources/js/index.js', 'js/main.bundle.js')
  // Run ESLint on every file
  .eslint()
  // Styles
  .postCss('sources/css/main.css', 'css/main.css', [
    require('postcss-nested'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  // Set the public path to the dist folder
  .setPublicPath('dist')
  // BrowserSync
  .browserSync({
    proxy,
    files: ['templates/**/*.{php,twig,html}', 'dist/**/*.{js,css}'],
  })
  // Run default output cleaning
  .clean()
  // Versioning
  .version()
  .options({
    processCssUrls: false,
  });
