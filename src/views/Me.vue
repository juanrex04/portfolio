<template>
  <div class="home">
    <img  id="photo" src="../assets/photo.jpg" />
    <quienSoy msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import quienSoy from "@/components/quiensoy.vue";

export default {
  name: "Home",
  components: {
    quienSoy,
  },
};
</script>
<style>
#photo {
  width: 10%;
  justify-content: left;
}
</style>
