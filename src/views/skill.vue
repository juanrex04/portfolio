<template>
  <div id="skill" class="container">
    <div title="skills" class="my-4">
      <h1 id="titles" md="6">HARDSKILLS</h1>
      <img id="express" src="../assets/img/express.png" class="my-4" />
      <br />
      <img id="java" src="../assets/img/javascript.svg" />
      <br />
      <img id="mongodb" src="../assets/img/mongodb.png" />
      <br />
      <img id="vue" src="../assets/img/vue.png" class="my-5" />
      <br />
      <img id="nodejs" src="../assets/img/nodejs.svg" />
      <br />
    </div>
    <br />
    <br />
    <div class="container">
      <h1 id="titles">SOFTSKILLS</h1>
      <img id="mindset" src="../assets/img/mindset.png" />
      <img id="mindset" src="../assets/img/mindset.png" />
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
  min-height: 85vh;
  max-height: 155vh;
  height: auto;
}
#titles {
  color: white;
  float: center;
}
#express {
  width: 15%;
  float: left;
}
#java {
  width: 10%;
  float: right;
}
#vue {
  width: 10%;
  float: right;
}
#nodejs {
  width: 10%;
  float: left;
}
#mongodb {
  width: 30%;
  float: center;
}
#mindset {
  width: 30%;
}
</style>