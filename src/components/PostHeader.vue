<template>
  <div class="post_header" v-if="post">
    <div class="info">
      <h3>{{ post.title }}</h3>
      <h6>{{ post.date }}</h6>
      <h5>{{author.name}}</h5>
    </div>
    <button class="star_btn">
      <svg class="star" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 477.905 477.905" enable-background="new 0 0 477.905 477.905" xml:space="preserve"
           width="20px" height="20px">
	<g>
		<path d="M476.343,183.008c-3.834-12.939-14.932-22.404-28.314-24.149l-127.01-17.545L270.758,21.216
			C263.42,3.637,243.22-4.664,225.641,2.674c-8.38,3.499-15.043,10.161-18.541,18.541l-50.261,120.098l-127.01,17.545
			C10.905,161.493-2.3,178.969,0.335,197.892c1.132,8.132,5.119,15.596,11.249,21.058l95.693,85.333L87.616,438.189
			c-2.13,13.597,4.115,27.144,15.838,34.355c11.558,7.391,26.425,7.115,37.7-0.7l97.775-66.492l97.775,66.56
			c15.777,10.708,37.248,6.599,47.957-9.178c4.866-7.17,6.859-15.907,5.582-24.477l-19.661-133.956l95.693-85.333
			C476.436,210.02,480.381,195.931,476.343,183.008z"/>
	</g>
</svg>
    </button>
  </div>
</template>

<script>


export default {
  name: "PostHeader",
  props: ['post'],

  data(){
    return {
      author : null
    }
  },

  created() {
    if (!this.post){
      return
    }

    this.author = this.$store.getters.getUserByID(this.post.authorID)
  }
}
</script>

<style scoped>
.post_header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.star_btn {
  align-self: end;
  padding: 5px;
}

.star_btn:hover .star {
  fill: #AF7AC5;
}

.info{
  margin-left: 10px;
}

h3 {
  margin-bottom: 0;
}

h6{
  margin-top: 5px;
}

</style>