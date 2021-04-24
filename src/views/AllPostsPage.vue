<template>
  <div class="all_post_page">
    <PostCard v-for="post in this.$store.getters.getPosts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
export default {
  name: "AllPostsPage",
  components: {PostCard},

}
</script>

<style scoped>
.all_post_page {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  width: 60%;
  overflow-y: scroll;
}
</style>