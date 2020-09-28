<template>
  <div>
    <van-nav-bar style="background-color:#2F8FEA;" :border="false">
      <template #title>
        <span style="color:#fff">我的</span>
      </template>

      <template #left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
    </van-nav-bar>

    <van-cell-group>
      <van-cell style="background-color:#2F8FEA;margin-top:-1px" :border="false" @click="login">
        <template #icon>
          <span class="iconfont icon-lujing" style="color:#fff;font-size:50px;margin-top:10px"></span>
        </template>
        <template #title>
          <span style="color:#fff;font-size:18px;margin-left:10px" v-if="username==''">登录/注册</span>
          <span style="color:#fff;font-size:18px;margin-left:10px" v-else>{{username}}</span>
        </template>
        <template #label>
          <span class="iconfont icon-ai-phone" style="color:#fff;font-size:12px;margin-left:10px"></span>
          <span style="color:#fff;font-size:12px">暂无绑定手机号</span>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#fff" style="margin-top:12px" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  created() {
    let users = sessionStorage.users;
    if (users) {
      this.username = users;
    }
  },
  methods: {
    login() {
      if (this.username == "") {
        this.$router.push({
          path: "/login"
        });
      }else{
          this.$router.push({
              path:'/mess'
          })
      }
    }
  }
};
</script>

<style>
</style>