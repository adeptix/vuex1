<template>
  <div class="user_profile">
    <h3>
      Имя: {{ user.name }}
    </h3>
    <h4>
      Роль: {{ user.role }}
    </h4>
    <h4>
      Количество записей: {{postCount}}
    </h4>
  </div>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "UserProfile",

  data() {
    return {}
  },


  computed: {
    ...mapGetters([
      'getUserByID',
      'getUserPostsCount',
    ]),

    user() {
      return this.getUserByID(this.$route.params.id)
    },

    postCount() {
      return this.getUserPostsCount(this.$route.params.id)
    }
  },

}
</script>

<style scoped>
.user_profile {
  display: flex;
  flex-direction: column;
  background: #1F1F1F;
  width: 60%;
  margin: auto;
  padding: 15px;
}

</style>