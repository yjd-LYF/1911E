<template>
  <div>
    <van-nav-bar style="background-color:#2F8FEA;" :border="false">
      <template #title>
        <span style="color:#fff">个人资料</span>
      </template>

      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back" />
      </template>
    </van-nav-bar>

    <van-button type="danger" block @click="exit">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({
        path: "/"
      });
    },
    exit() {
      this.$dialog.confirm({
        message: "确定要退出吗？"
      }).then(()=>{
          sessionStorage.removeItem('users')
          this.$router.push({
              path:'/'
          })
      })
    }
  }
};
</script>

<style>
</style>