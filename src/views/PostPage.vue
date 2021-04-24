<template>
  <div class="post_page">
    <PostHeader class="header" :post="post"></PostHeader>
    <div class="txt">{{ post.text }}</div>
    <UserCard :user="author"></UserCard>
  </div>
</template>

<script>
import PostHeader from "@/components/PostHeader";
import UserCard from "@/components/UserCard";

export default {
  name: "PostPage",
  components: {UserCard, PostHeader},
  data() {
    return {
      post: null,
      author: null
    }
  },

  created() {
    const postID = this.$route.params.id
    this.post = this.$store.getters.getPostByID(postID)
    this.author = this.$store.getters.getUserByID(this.post.authorID)
  }

}
</script>

<style scoped>
.post_page {
  max-width: 65%;
  margin: 20px auto;
  background: #1F1F1F;
  padding: 5px;
}

.txt {
  padding: 5px;
}


</style>