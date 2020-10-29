<template>
  <div id="skill" class="">
    <div title="skills">
      <img id="express" src="../assets/img/express.png" class="my-4" />
      <br />
      <img id="java" src="../assets/img/javascript.svg" alt="" />
      <br />
      <img id="mongodb" src="../assets/img/mongodb.png" alt="" />
      <br />
      <img id="vue" src="../assets/img/vue.png" alt="" />
      <br />
      <img id="nodejs" src="../assets/img/nodejs.svg" alt="" />
      <br />
    </div>
    <div title="knowledge">
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
#skill{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #182a3f;
  min-height: 150vh;
  max-height: 200vh;
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
  width: 50%;
  float: center;
}
#mindset{
  width: 30%;
}
</style>