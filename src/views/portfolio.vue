<template>
  <div>
    <h1 id="titles" class="container my-4">Portafolio</h1>
    <b-row>

      <!-- Geekshop -->
      <b-col md="12" lg="6" class="my-4"> 
      <a href="https://github.com/juanrex04/geekshops-api" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInLeft"
        :src="require(`../assets/img/geekshop.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>

      <div>
        <b-button class="boton" pill v-b-modal.geekshop
          >Mas info acerca de la app!</b-button
        >
        <b-modal id="geekshop" centered ok-only title="GeekShop!">
          <p class="my-4">
            página que nos permite gestionar un sistema de inventario para juegos y administrar
            usuarios registrados en la base de datos, este página cuenta con tres roles para su uso:
            <ul>
              <li>Administrador</li>
              <li>Empleado</li>
              <li>Cliente</li>
            </ul>
            Se implemento el stack <b>MEVN</b> para el desarrollo de esta página 
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>
    
      <!-- Prifood -->
      <b-col md="12" lg="6" class="my-4">
        <a href="https://github.com/juanrex04/prifood" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInRight"
        :src="require(`../assets/img/prifood-home.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>
      <div>
        <b-button class="boton" href="https://juanprox.github.io" target="_BLANK" pill>Ir a la página</b-button>
        <b-button class="boton" pill v-b-modal.prifood
          >Mas info acerca de la página!</b-button>
        <b-modal id="prifood" centered ok-only title="PRIFOOD!">
          <p class="my-4">
            Página que nos permite visualizar los productos de Prifood y conocer un poco más acerca del restaurante de comida rápida como:
            <ul>
              <li>Localización</li>
              <li>Redes Sociales</li>
              <li>Número telefónico</li>
            </ul>
            Esta página se desarrollo con <b>Vue.JS</b> 
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>

      <!-- CyberPunk -->
      <b-col md="12" lg="6" class="my-4">
        <a href="https://github.com/juanrex04/CyberPunk" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInLeft"
        :src="require(`../assets/img/cyberPunk.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>

      <div>
        <b-button class="boton" href="https://juanrex04.github.io/CyberPunk/" target="_BLANK" pill>Ir a la página</b-button>
        <b-button class="boton" pill v-b-modal.cyberpunk
          >Mas info acerca de la página!</b-button>
        <b-modal id="cyberpunk" centered ok-only title="CyberPunk!">
          <p class="my-4">
            Página que nos permite conocer mas acerca del estilo CyberPunk y en donde se puede encontrar refencias a este movimiento
            Esta página se desarrollo con:
            <ul>
              <li>
                <b>HTML</b>
              </li>
              <li>
                <b>CSS/SCSS</b>
              </li>
              <li>
                <b>JavaScript</b>
              </li>
              </ul>  

              Esta app cuenta con <b>RESPONSIVE DESIGN</b> para celulares y computadores
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>

       <!-- Travelin us -->
      <b-col md="12" lg="6" class="my-4">
        <a href="https://github.com/juanrex04/leadingpage-bootstrap" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInRight"
        :src="require(`../assets/img/travelworld.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>

      <div>
        <b-button class="boton" href="https://travelingworld.netlify.app/" target="_BLANK" pill>Ir a la página</b-button>
        <b-button class="boton" pill v-b-modal.travelworld
          >Mas info acerca de la página!</b-button>
        <b-modal id="travelworld" centered ok-only title="Traveling us!">
          <p class="my-4">
            Leading page para dar a conocer una agencia de viaje la cual cuenta con un formulario basico y diseño minimalista:
            <ul>
              <li>
                <b>HTML</b>
              </li>
              <li>
                <b>CSS</b>
              </li>
              <li>
                <b>JavaScript</b>
              </li>
              <li>
                <b>Bootstrap</b>
              </li>
              </ul>  

              Esta página cuenta con diseño <b>RESPONSIVE DESIGN</b> para celulares y computadores
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>
      
      <!-- Animesearch -->
      <b-col md="12" lg="" class="my-4">
        <a href="https://github.com/juanrex04/anime-databases" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInRight"
        :src="require(`../assets/img/animesearch.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>

      <div>
        <b-button class="boton" href="https://animesearching.netlify.app/" target="_BLANK" pill>Ir a la página</b-button>
        <b-button class="boton" pill v-b-modal.animesearch
          >Mas info acerca de la página!</b-button>
        <b-modal id="animesearch" centered ok-only title="Anime Search!">
          <p class="my-4">
            Página que permite la busqueda de animes por medio de su nombres o palabras relacionadas a estos, esta página fue realizada con 
            <ul>
              <li>
                <b>VueJS</b>
              </li>
              </ul>  

              La API usada en esta página es <a href="https://jikan.docs.apiary.io/#" target="_BLANK">Jikan</a>
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>

      <!-- CarShop -->
      <b-col md="12" lg="6" class="my-4">
        <a href="https://github.com/juanrex04/carritoDeCompras" target="_BLANK">
      <b-img
        id="photos"
        class="animate__animated animate__fadeInRight"
        :src="require(`../assets/img/cartShop.png`)"
        fluid
        v-b-tooltip.right.html
        title="Has clic en mi para dirigirte al repositorio en <b>GitHub</b>">
      </b-img>
      </a>

      <div>
        <b-button class="boton" href="https://cartshop-vue3.netlify.app/" target="_BLANK" pill>Ir a la página</b-button>
        <b-button class="boton" pill v-b-modal.cartshop
          >Mas info acerca de la página!</b-button>
        <b-modal id="cartshop" centered ok-only title="Cart Shop!">
          <p class="my-4">
            Página que permite la simulación de un carro de compras con productos traidos desde un <strong>JSON</strong>, esta página se desarrollo usando:
            <ul>
              <li>
                <b>VueJS 3</b>
              </li>
              <li>
                <b>Bootstrap</b>
              </li>
              </ul>  
          </p>
          <template #modal-footer>
            <b>Nota: ¡Si quieres ver el código da clic en la imagen!</b>
          </template>
        </b-modal>
      </div>
      </b-col>


    </b-row>
  </div>
</template>

<style>
#titles {
  color: white;
}
#photos {
  max-height: 300px;
  width: auto;
  border-radius: 30px;
  overflow: hidden;
}
.boton {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  margin-top: 1.5rem;

  display: inline-block;
  padding: 20px 30px;
  margin-left: 15px;
  background-image: linear-gradient(to right, #0a043c, #03506f);
  border-radius: 8px;

  font-size: 1.2rem;
  font-weight: 500;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.boton:hover {
  background-image: linear-gradient(to right, #03506f, #0a043c);
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>