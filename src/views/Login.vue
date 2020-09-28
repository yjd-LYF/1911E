<template>
  <div>
    <van-nav-bar style="background-color:#2F8FEA;" :border="false">
      <template #title>
        <span style="color:#fff">登录</span>
      </template>

      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back" />
      </template>
    </van-nav-bar>
    <!-- 表单 -->
    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },{pattern:/^1(3|4|5|7|8)\d{9}$/,message: '请输入正确的11位数手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern:/^\w{6,}$/,message: '密码不少于6位'}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onSubmit">登录</van-button>
      </div>
    </van-form>

    <router-link to="/sign">新用户注册</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // match([string] | [RegExp])
      if (this.username.trim() == "") {
        return;
      }
      if (!this.username.match(/^1(3|4|5|7|8)\d{9}$/)) {
        return;
      }
      if (this.password.trim() == "") {
        return;
      }
      if (!this.password.match(/^\w{6,}$/)) {
        return;
      }
      // 注册
      // 1、获取localstorage的数据
      let users = localStorage.users;
      if (users) {
        users = JSON.parse(users);
        let isLogin = false;
        users.map(item => {
          if (
            item.username == this.username &&
            item.password == this.password
          ) {
            isLogin = true;
            return;
          }
        });
        if (isLogin) {
          sessionStorage.users = this.username;
          this.$router.push({
            path: "/"
          });
        } else {
          this.$notify({
            type: "danger",
            message: "输入账号或密码有误"
          });
        }
      }else{
            this.$notify({
                type: 'danger', 
                message: '用户不存在'
            });
        }
 
    },
    back() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style>
</style>