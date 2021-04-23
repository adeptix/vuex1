<template>
  <header>
    <div class="container" v-if="authUser">
      <h1>Posts Vuex</h1>
      <button class="profile_btn">
        <img :src="require('@/assets/' + authUser.image)">
        <h4>{{ authUser.name }}</h4>
      </button>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainHeader",

  data() {
    return {}
  },

  methods: {

  },

  computed: {
    ...mapGetters({
      authUser: "getAuthUser"
    })
  }

}
</script>

<style scoped>
header {
  background-color: #1F1F1F;
  margin: 0;
}

.container {
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: aliceblue;
  padding-left: 5%;
}

h1 {

}

.profile_btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding-right: 30px;
  outline: none;
}

.profile_btn img {
  height: 55px;
  max-height: 55px;
  border-radius: 50%;
  border: 3px solid #AF7AC5;
  margin: 15px;
}

.profile_btn:hover {
  background: #151515;
}

h4 {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}

</style>