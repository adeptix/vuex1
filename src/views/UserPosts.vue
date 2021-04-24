<template>
  <div class="user_posts">
    <PostCard v-for="post in userPosts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import {mapGetters} from "vuex";
export default {
  name: "UserPosts",
  components: {PostCard},

  computed: {
    ...mapGetters([
        'getUserPosts'
    ]),

    userPosts(){
      return this.getUserPosts(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.user_posts {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  width: 60%;
  overflow-y: scroll;
}
</style>