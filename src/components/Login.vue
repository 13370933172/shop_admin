<template>
  <div class="login">
    <h1>这是login组件</h1>
    <!-- 通过 type plain round circle 可以控制按钮的样式
         type 颜色, 默认白色, primary蓝色, success绿色, info灰黑, warning金黄, danger红色
         plain 简约, 朴素
         round 圆角, 胶囊按钮
         circle 圆, border-radius: 50%;
    -->
    <el-button class="mybtn" type="success">按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button plain type="danger">按钮</el-button>
    <el-button round type="danger">按钮</el-button>
    <el-button circle type="danger">按钮</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login {
  // .el-button {
  //   background-color: blue;
  // }
  .mybtn {
    background-color: orange;
    border-radius: 50%;
  }
}

</style>
