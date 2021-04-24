<template>
  <router-link
      class="user_card"
      :to="{ name: 'userProfile', params: { id: user.id } }" tag="button">
    <img :src="loadImg(user.image)" alt="profile image" v-if="showImg">
    <h4>{{ user.name }}</h4>
  </router-link>
</template>

<script>
export default {
  name: "UserCard",
  props: ['user'],

  data() {
    return {
      showImg: true
    }
  },

  methods: {
    loadImg(imageName) {
      try {
        return require('@/assets/' + imageName)
      } catch (e) {
        console.log(e)
        this.showImg = false
        return false
      }
    },


  }
}
</script>

<style scoped>
.user_card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
}

.user_card img {
  height: 55px;
  max-height: 55px;
  border-radius: 50%;
  border: 3px solid #AF7AC5;
  margin: 15px;
}

.user_card:hover {
  background: #151515;
}

h4 {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}

</style>