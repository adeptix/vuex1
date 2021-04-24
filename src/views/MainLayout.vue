<template>
  <div class="main">
    <div class="main_layout">
      <main-header/>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'MainLayout',
  components: {
    MainHeader
  },

  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style scoped>

</style>
