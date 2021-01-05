<template>
  <div class="container my-5">
    <b-img id="error" fluid left :src="require(`../assets/img/404.svg`)"> </b-img>
    <h6 class="notfound">Wow!</h6>
    <h2 class="notfound404">Parece que viste más alla de lo conocido</h2>
    <b-button class="button" size="lg" variant="dark" :to="{ name: 'Me' }"
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
.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #96183e, #e24040);
  border-radius: 8px;

min-width: 65vw;
  color: #fff;
  font-size: 17px;
  font-weight: 500;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.button:hover {
  background-image: linear-gradient(to right, #e24040, #96183e);
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>