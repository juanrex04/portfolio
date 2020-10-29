<template>
  <div id="body" class=" container mx-3 my-4">
    <h1 id="title">Curriculum</h1>
    <img id="cv" src="../assets/img/cv.png" />
    <br />
    <a href='../assets/docs/cv-juan.pdf' download="Juan Restrepo - CV.pdf">
      <b-button>Presiona aqui si quieres ver mi Curriculum Vitae</b-button>
    </a>
  </div>
</template>
<script>
//target="_BLANK"
export default {};
</script>
<style>
#cv {
  width: 30%;
}
#title{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  float: center;
  color: white;
}
#body{
  min-height: 50vh;
}
</style>