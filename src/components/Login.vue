<template>
  <div class="login">
    <!-- 通过 type plain round circle 可以控制按钮的样式
         type 颜色, 默认白色, primary蓝色, success绿色, info灰黑, warning金黄, danger红色
         plain 简约, 朴素
         round 圆角, 胶囊按钮
         circle 圆, border-radius: 50%;
    -->
    <!-- <el-button class="mybtn" type="success">按钮</el-button>
    <el-button type="danger">按钮</el-button>
    <el-button plain type="danger">按钮</el-button>
    <el-button round type="danger">按钮</el-button>
    <el-button circle type="danger">按钮</el-button> -->

    <!--
      el-form 整个form表单组件
        (1) :model="form" 给组件配置了model属性, 属性值是一个form对象
            将来form对象中的所有属性, 会和表单元素双向数据绑定
        (2) label-width 统一设置表单中label标签的宽度
      el-form-item 单个表单项
        (1) label 设置label标签的内容
        (2) label-width 设置自己的label的宽度
      el-input 输入框
        利用v-model和可以form的属性双向数据绑定

      status-icon 设置显示状态图标
     -->
    <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
      <img class="logo" src="../assets/avatar.jpg" alt="">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" class="loginBtn" type="primary">登陆</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        // 1. required: true 必填项, 不能为空
        // 2. message 错误提示
        // 3. trigger 什么时候进行触发校验,
        //    'blur'失去焦点, 进行校验
        //    'change' 只要值发生改变, 就进行校验
        // 4. min最小 max最大输入长度
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '用户名长度必须是3-12位', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度必须是3-12位', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 获取到el-form组件, 调用重置的方法
      this.$refs.form.resetFields()
    },
    login () {
      // 先进行校验
      // 参数1: 是否校验成功
      // 参数2: 错误的信息对象
      this.$refs.form.validate(isValid => {
        // console.log(isValid)
        // 如果校验失败, 直接return
        if (!isValid) return

        // axios.post(url, data).then(..).catch(..)
        axios.post('http://localhost:8888/api/private/v1/login', this.form).then(res => {
          const { meta } = res.data
          if (meta.status === 200) {
            // 成功了
            // console.log(meta.msg)
            // 1. 默认提示效果
            // this.$message(meta.msg)

            // 2. 配置对象, 完成提示
            this.$message({
              type: 'success',
              message: meta.msg,
              duration: 1000
            })

            // 跳转路由, 跳转到首页
            // this.$router.push('/index')
            this.$router.push({ name: 'index' })
          } else {
            // 失败了
            // console.log(meta.msg)
            // 3. 可以在调用方法的同时, 指定提示的类型
            this.$message.error(meta.msg)
          }
        })
      })
    }
  }
}

// const obj = {
//   name: 'zs',
//   age: 18
// }
// const { name, age } = obj
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  // .el-button {
  //   background-color: blue;
  // }
  .mybtn {
    background-color: orange;
    border-radius: 50%;
  }

  .el-form {
    width: 400px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    padding-top: 75px;

    margin: 0 auto;
    margin-top: 200px;
    position: relative;

    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -75px;
      border-radius: 50%;
      border: 5px solid #fff;
    }

    .loginBtn {
      margin-right: 70px;
    }
  }
}

</style>
