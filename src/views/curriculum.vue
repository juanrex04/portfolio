<template>
  <div class="container my-5">
    <h1 id="titles">Curriculum Vitae</h1>
    <transition >
      <b-img id="cv" class="animate__animated animate__fadeInDown" fluid :src="require(`../assets/img/cv.png`)" />
    </transition>
    <br />
    <a
      href="https://drive.google.com/file/d/1ohYQnJLvUnMOMwNqCOROiXHduZUKJ-uG/view?usp=sharing"
      target="_BLANK"
    >
      <b-button pill class="btns my-3"
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
  color: white;
}

.btns {
  appearance: none;
  outline: none;
  border: none;
  background: none;

  display: inline-block;
  padding: 15px;
  background-image: linear-gradient(to right, #0a043c, #03506f);
  border-radius: 8px;

  min-width: 40vw;
  font-size: 1.2rem;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.btns:hover {
  background-image: linear-gradient(to right, #03506f, #0a043c);
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>