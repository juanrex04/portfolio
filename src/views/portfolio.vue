<template>
  <div id="port">
    <h1 id="titles" class="container my-4">Portafolio</h1>
    <a href="https://github.com/juanrex04/geekshops-api" target="_BLANK">
    <b-img
      id="geek"
      class="animate__animated animate__fadeInLeft"
      :src="require(`../assets/img/geekshop.png`)"
      fluid
      v-b-tooltip.hover.right.html
      title="Has click en mi para dirigirte al repositorio en <b>GitHub</b>">
    </b-img>
    </a>
    <div>
      <b-button class="button my-2" pill v-b-modal.modal-center
        >Mas info acerca de la app!</b-button
      >
      <b-modal id="modal-center" centered ok-only title="GeekShop!">
        <p class="my-4">
          Pagina que nos permite gestionar un sistema de inventario para juegos y administrar
          usuarios registrados en la base de datos, este pagina cuenta con tres roles para su uso:
          <ul>
            <li>Administrador</li>
            <li>Empleado</li>
            <li>Cliente</li>
          </ul>
          Se implemento el stack <b>MEVN</b> para el desarrollo de esta pagina 
        </p>
        <template #modal-footer>
          <b>Nota: Si quieres ver el codigo da click en la imagen!</b>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<style>
#port {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 80vh;
  max-height: 150vh;
}
#titles {
  color: white;
}
#geek {
  max-height: 380px;
  width: auto;
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
  background-image: linear-gradient(to right, #e24040, #96183e);
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
</style>