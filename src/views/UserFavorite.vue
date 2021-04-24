<template>
  <div class="user_favorite">
    <PostCard v-for="post in getFavoritePosts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import {mapGetters} from "vuex";

export default {
  name: "UserFavorite",
  components: {PostCard},

  computed: {
    ...mapGetters([
      'getFavoritePosts'
    ]),
  }
}
</script>

<style scoped>
.user_favorite {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  width: 60%;
  overflow-y: scroll;
}
</style>