<template>
  <div class="user_layout">
    <div class="nav">
      <input type="radio" name="tabs" id="profileTab" v-model="currentTab" value="userProfile"/>
      <label for="profileTab">{{isAuthUser() ?'Мой ': ''}}Профиль</label>

      <input type="radio" name="tabs" id="postsTab" v-model="currentTab" value="userPosts"/>
      <label for="postsTab">{{isAuthUser() ?'Мои ': ''}}Записи</label>

      <input
          type="radio"
          name="tabs"
          id="favoriteTab"
          v-model="currentTab"
          value="userFavorite"
          v-if="isAuthUser()"
      />
      <label for="favoriteTab" v-if="isAuthUser()" >Избранное</label>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "UserLayout",

  data() {
    return {

    }
  },

  methods: {
    isAuthUser() {
      return this.$store.getters.getAuthID == this.$route.params.id
    }
  },

  computed: {
    currentTab: {
      get: function (){
        switch (this.$route.name){
          case "userPosts":
            return "userPosts"
          case "userFavorite":
            return "userFavorite"
        }
        
        return "userProfile"
      },
      
      set: function (newTab) {
        if (this.$route.name != newTab){
          this.$router.push({name: newTab})
        }
      }
    }
  },

}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  padding: 50px 0;
  justify-content: center;

}

input {
  display: none;
}

label {
  color: white;
  padding: 5px 10px;
}

input + label {
  background: #1F1F1F;
  border-bottom: 1px solid transparent;
}

input:checked + label { /* white background for selected tab */
  background: #AF7AC5;
  border-bottom: 1px solid transparent;
}


</style>