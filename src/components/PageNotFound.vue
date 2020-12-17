<template>
  <div class="container my-5">
    <b-img id="error" fluid left :src="require(`../assets/img/404.svg`)"> </b-img>
    <h6 class="notfound">Wow!</h6>
    <h2 class="notfound404">Parece que viste más alla de lo conocido</h2>
    <b-button size="lg" variant="dark" :to="{ name: 'Me' }"
      >Regresar a un lugar conocido</b-button
    >
  </div>
</template>
<script>
export default {
  name: "PageNotFound",
};
</script>
<style>
.container {
  color: #211b19;
}
.notfound {
  font-family: Monstserrat, sans-serif;
  font-size: 10vw;
}
.notfound404 {
  font-family: Monstserrat, sans-serif;
  font-size: 3.5vw;
}
#error{
    max-height: 340px;
    width: auto;
}
</style>