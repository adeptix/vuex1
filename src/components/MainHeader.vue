<template>
  <header>
    <div class="container">
      <router-link class="main_link" :to="{name: 'allPostsPage'}">
        <h1>Posts Vuex</h1>
      </router-link>
      <UserCard :user="authUser" v-if="authUser"/>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";
import UserCard from "@/components/UserCard";

export default {
  name: "MainHeader",
  components: {UserCard},
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
  color: white;
  padding-left: 5%;
}

.main_link{
  color: white;
  text-decoration: none;
}

h1 {

}


</style>