<template>
  <div id="skill" class="container text-center">
    <div title="skills" class="my-4">
      <h1 id="titles">HARDSKILLS</h1>
      <b-img  class="mx-2" id="express" :src="require(`../assets/img/express.png`)" fluid alt="Fluid image"></b-img>
      <b-img  class="mx-2" id="java" :src="require(`../assets/img/javascript.svg`)" fluid alt="Fluid image"></b-img>
      <b-img  class="mx-2" id="mongodb" :src="require(`../assets/img/mongodb.png`)" fluid alt="Fluid image"></b-img>
      <b-img  class="mx-2" id="vue" :src="require(`../assets/img/vue.png`)" fluid alt="Fluid image"></b-img>
      <b-img  class="mx-2" id="nodejs" :src="require(`../assets/img/nodejs.svg`)" fluid alt="Fluid image"></b-img>
    </div>
    <div class="container">
      <h1 id="titles">SOFTSKILLS</h1>
      <b-img id="mindset" :src="require(`../assets/img/mindset.png`)" fluid alt="Fluid image"></b-img>
    </div>
  </div>
</template>
<script>
export default {
  name: "skill",
};
</script>
<style>
#skill {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2d4e74;
  min-height: 100vh;
  height: auto;
}
#titles {
  color: white;
  float: center;
}
#express {
  width: 250px;
  height: auto;
}
#java {
  max-width: 130px;
  height: auto;
}
#vue {
  max-width: 150px;
  height: auto;
}
#nodejs {
  max-width: 150px;
  height: auto;
}
#mongodb {
  max-width: 300px;
  height: auto;
}
#mindset {
  max-width: 30%;
  height: auto;
}
</style>