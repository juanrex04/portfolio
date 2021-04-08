<template>
  <div class="container">

<h2 class="tituloh2 mt-5">FRONTEND</h2>
<b-row class="mb-5">
          <b-col md="6" lg="4">
            <b-img title="HTML 5" class="frontend" :src="require(`../assets/img/html-5.svg`)"
            v-b-tooltip.bottom/>
          </b-col>

          <b-col md="6" lg="4" >
            <b-img title="CSS" class="frontend" :src="require(`../assets/img/css-3.svg`)"
            v-b-tooltip.bottom/>
          </b-col>

          <b-col md="6" lg="4">
          <b-img  title="JavaScript" class="frontend" :src="require(`../assets/img/javascript.svg`)"
            v-b-tooltip.bottom/>
          </b-col>

          <b-col md="6" lg="4">
            <b-img title="VueJS" class="frontend" :src="require(`../assets/img/vue.png`)" 
            v-b-tooltip.bottom
            />
          </b-col>

          <b-col md="6" lg="4">
            <b-img title="SCSS" class="frontend" :src="require(`../assets/img/scss.png`)" 
            v-b-tooltip.bottom
            />
          </b-col>
          
          <b-col md="6" lg="4">
            <b-img title="Bootstrap" class="frontend" :src="require(`../assets/img/bootstrap.png`)" 
            v-b-tooltip.bottom
            />
          </b-col>
        </b-row>
   
        <h2 class="tituloh2 m-3">BACKEND</h2>
        <div class="m-auto">
          <b-row>
          <b-col md="6" lg="4">
            <b-img
              title="Express"
              class="backend"
              :src="require(`../assets/img/express.png`)"
              alt="Fluid image"
              v-b-tooltip.left
            />
          </b-col>
            
            <b-col md="6" lg="4">
            <b-img
              title="MongoDB"
              class="mongoDB"
              :src="require(`../assets/img/mongodb.png`)"
              alt="Fluid image"
              v-b-tooltip.up
            />
            </b-col>

            <b-col md="12" lg="4">
            <b-img
            title="NodeJS"
              class="nodejs" 
              :src="require(`../assets/img/nodejs.svg`)"
              alt="Fluid image"
              v-b-tooltip.right
            />
            </b-col>
          </b-row>
        </div>

      <div class="my-3">
        <b-button class="button" pill v-b-modal.modal-center>Mas info acerca de mi!</b-button>
        <b-modal id="modal-center" centered ok-only title="Conocimientos básicos!">
          <p class="my-4">
            <ul>
              <li>Diplomado en gestión e innovacion de proyectos</li>
              <li>Ingles B1</li>
              <li>Creación de documentos</li>
              <li>Pruebas de software</li> 
              <li>Creación de casos de pruebas</li> 
              <li>Manejo de inventario</li>
              <li>Resolución de problemas</li>
              <li>Flexibilidad</li>
            </ul>
          </p>
        </b-modal>
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
.frontend {
  max-width: 100px;
  height: auto;
  margin: 1.5rem;
}
.backend {
  max-width: 200px;
  height: auto;
  margin: 1.5rem;
}
.mongoDB {
  max-width: 200px;
  height: auto;
  margin: 1.5rem;
}
.nodejs {
  max-width: 80px;
  height: auto;
  margin: 1.5rem;
}
.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #0a043c, #03506f);
  border-radius: 8px;

  min-width: 65vw;
  font-size: 20px;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.button:hover {
  background-image: linear-gradient(to right, #03506f, #0a043c);
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>