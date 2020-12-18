<template>
  <div id="body" class="container my-5">
    <h1 id="titles">Curriculum Vitae</h1>
    <transition >
      <b-img id="cv" class="animate__animated animate__fadeInDown" fluid :src="require(`../assets/img/cv.png`)" />
    </transition>
    <br />
    <a
      href="https://drive.google.com/file/d/1ohYQnJLvUnMOMwNqCOROiXHduZUKJ-uG/view?usp=sharing"
      target="_BLANK"
    >
      <b-button pill class="button my-3"
        >Presiona aqui si quieres ver mi Curriculum Vitae</b-button
      >
    </a>
  </div>
</template>
<script>
export default {
  name: "curriculum"
};
</script>
<style>
#cv {
  width: 300px;
  height: auto;
}
#titles {
  float: center;
  color: white;
}
.body {
  min-height: 150vh;
}
</style>