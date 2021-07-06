<template>
  <div class="home-container">
    <div class="home-text">
      <p>您好 {{ name }}</p>
      <p>欢迎使用食品污染物管理平台</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    text-align: center;
    font-size: 40px;
    line-height: 60px;
  }
}
</style>
