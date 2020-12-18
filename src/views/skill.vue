<template>
  <div id="skill" class="container text-center">
    <b-container title="hardskills" class="my-4">
      <h1 id="titulos">HARDSKILLS</h1>
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
      <h1 id="titulos"></h1>
      <b-img
        id="mindset"
        :src="require(`../assets/img/mindset.png`)"
        fluid
        alt="Fluid image"
      ></b-img>
      <div>
        <b-button class="info" v-b-modal.modal-center>Mas info acerca de mi!</b-button>
        <b-modal id="modal-center" centered ok-only title="Algo de lo que se!">
          <p class="my-4">
            <ul>
              <li>Diplomado en gestión e innovacion de proyectos</li>
              <li>Ingles B1</li>
              <li>Creación de documentos</li>
              <li>Pruebas de software y ceacón de casos de pruebas</li>
              <li>Manejo de inventario</li>
              <li>Resolución de problemas</li>
              <li>Flexibilidad</li>
            </ul>
          </p>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "skill",
  data() {
    return {
      showInfo: true,
    };
  },
};
</script>
<style>
#skill {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: auto;
}
#titulos {
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
  justify-content: center;
  align-items: center;
  max-width: 200px;
  height: auto;
}
.info{
  appearance: none;
 outline: none;
 border: none;
 background: none;
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, #96183e, #e24040);
 border-radius: 8px;
 
 color: #FFF;
 font-size: 18px;
 font-weight: 700;
 
 box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
 transition: 0.4s ease-out;
}
.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
 }
</style>