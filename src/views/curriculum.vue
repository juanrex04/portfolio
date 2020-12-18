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
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>