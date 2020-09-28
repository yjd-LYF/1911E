<template>
  <div>
    <van-nav-bar style="background-color:#2F8FEA;" :border="false">
      <template #title>
        <span style="color:#fff">新用户注册</span>
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
        <van-button round block type="info" @click="onSubmit">注册</van-button>
      </div>
    </van-form>
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
      } else {
        users = [];
      }

      // 2、把新注册的用户添加到数组
      users.push({
        username: this.username,
        password: this.password
      });

      // 3、保存到本地
      localStorage.users = JSON.stringify(users);

      setTimeout(() => {
        this.$router.push({
          path: "/login"
        });
      }, 1000);
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