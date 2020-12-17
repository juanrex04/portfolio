<template>
  <div id="skill" class="container text-center">
    <b-container title="hardskills" class="my-4">
      <h1 id="titles">HARDSKILLS</h1>
      <b-img
        class="mx-2"
        id="express"
        :src="require(`../assets/img/express.png`)"
        fluid
        alt="Fluid image"
      ></b-img>
      <b-img
        class="mx-2 my-2"
        id="java"
        :src="require(`../assets/img/javascript.svg`)"
        fluid
        alt="Fluid image"
      ></b-img>
      <b-img
        class="mx-2"
        id="mongodb"
        :src="require(`../assets/img/mongodb.png`)"
        fluid
        alt="Fluid image"
      ></b-img>
      <b-img
        class="mx-2"
        id="vue"
        :src="require(`../assets/img/vue.png`)"
        fluid
        alt="Fluid image"
      ></b-img>
      <b-img
        class="mx-2"
        id="nodejs"
        :src="require(`../assets/img/nodejs.svg`)"
        fluid
        alt="Fluid image"
      ></b-img>
    </b-container>
    <div title="softskill" class="container">
      <h1 id="titles">SOFTSKILLS</h1>
      <b-img
        id="mindset"
        :src="require(`../assets/img/mindset.png`)"
        fluid
        alt="Fluid image"
      ></b-img>

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
  width: auto;

}
#titles {
  color: white;
  float: center;
}
#express {
  width: 160px;
  height: auto;
}
#java {
  max-width: 100px;
  height: auto;
}
#vue {
  max-width: 100px;
  height: auto;
}
#nodejs {
  max-width: 100px;
  height: auto;
}
#mongodb {
  max-width: 280px;
  height: auto;
}
#mindset {
  max-width: 200px;
  height: auto;
}
</style>