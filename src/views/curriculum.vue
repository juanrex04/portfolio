<template>
  <div id="body" class="container mx-3 my-5">
    <h1 id="title">Curriculum Vitae</h1>
    <b-img id="cv" fluid :src="require(`../assets/img/cv.png`)" />
    <br />
    <a href='https://drive.google.com/file/d/1ohYQnJLvUnMOMwNqCOROiXHduZUKJ-uG/view?usp=sharing' target="blank">
      <b-button class="my-3">Presiona aqui si quieres ver mi Curriculum Vitae</b-button>
    </a>
  </div>
</template>
<script>
//target="_BLANK"
export default {};
</script>
<style>
#cv {
  width: 300px;
  height: auto;
}
#title{
  float: center;
  color: white;
}
.body{
  min-height: 150vh;
}
</style>