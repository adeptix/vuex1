<template>
  <div class="post_card">
    <PostHeader :post="post"></PostHeader>
    <div class="text">{{ post.text }}</div>
    <router-link
        :to="{ name: 'postPage', params: { id: post.id } }"
        class="more_info">
      Подробнее...
    </router-link>

  </div>
</template>

<script>
import PostHeader from "@/components/PostHeader";

export default {
  name: "PostCard",
  components: {PostHeader},
  props: ['post']
}
</script>

<style scoped>
.post_card {
  max-width: 85%;
  width: 85%;
  height: 25%;
  max-height: 25%;
  background-color: #1F1F1F;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
}

.text {
  padding: 5px;
  text-overflow: ellipsis;
  max-height: 4.5em;
  line-height: 1.5em;
  word-wrap: break-word;
  overflow: hidden;
}

.more_info {
  color: #AF7AC5;
  padding: 5px;
}


</style>