<template>
  <header>
    <div class="container">
      <h1>Posts Vuex</h1>
      <button class="profile_btn">
        <img src="@/assets/user.png">
        <h4>имя</h4>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
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

.profile_btn:hover{
  background: #151515;
}

h4{
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}

</style>