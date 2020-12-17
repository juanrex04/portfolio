<template>
  <div id="port">
    <h1 id="titles" class="container my-4">Portafolio</h1>
        <b-img id="geek" :src="require(`../assets/img/geekshop.png`)" fluid>
        </b-img>
  </div>
</template>
<style>
#port {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2d4e74;
  min-height: 80vh;
  max-height: 150vh;
}
#titles {
  color: white;
}
#geek {
  max-height: 380px;
  width: auto;
}
</style>