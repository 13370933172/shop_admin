<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

// sass 有两种语法
// 1. scss 比较接近于 less 的语法的, 区别: 在于声明变量不同, scss使用的是 $
// 2. sass 比较接近于 stylus的语法, 特征: 必须省略 {} ;
// $color: pink;
// * {
//   margin: 0;
//   padding: 0;
// }
// body {
//   background-color: $color;

//   h1 {
//     font-size: 50px;
//     color: red;
//   }
// }

// ----------------------------------------------------------------

// *
//   margin: 0
//   padding: 0

// body
//   background-color: skyblue
//   h1
//     font-size: 100px
//     color: orange

</style>
