<template>
  <div id="master" class="container.fluid mt-4">
    <b-card
      no-body
      class="overflow-hidden fluid"
      bg-variant="dark"
      text-variant="white"
    >
      <b-row>
        <b-col md="6">
          <b-card>
            <b-img
              :src="require(`../assets/img/photo.jpg`)"
              fluid
              alt="Juan Manuel"
          /></b-card>
        </b-col>
        <b-col md="6">
          <b-card-body
            title="Desarrollador fronted, Tester/QA, Soporte técnico"
            class="my-3"
          >
            <b-card-text class="my-4">
              Soy un joven que desea crecer cada dia adquiriendo más
              conocimiento para el desarrollo web y el soporte técnico.
              <br />
              <br />
              Soy un amante al mundo geek, las nuevas tecnologias y del cine.
              <br />
              Me considero alguien capaz de aprender y enseñar, totalmente
              dispuesto a recibir las mejores críticas para mejorar en lo que se
              crea necesario, por esta y muchas razones me considero alguien
              capaz de trabajar en equipo
              <br />
              <br />
              <div class="my-4">
                <a href="https://github.com/juanrex04" target="_BLANK">
                  <img
                    id="gitHub"
                    src="../assets/img/github.png"
                    v-b-tooltip.hover.left
                    title="GitHub"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-manuel-restrepo-moreno-6ab45a19b"
                  target="_BLANK"
                  class="mx-4"
                >
                  <img
                    id="linkedin"
                    src="../assets/img/linkedin.png"
                    alt="linkeIn"
                    v-b-tooltip.hover.right
                    title="LinkedIn"
                  />
                </a>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br />
  </div>
</template>

<script>
export default {};
</script>
<style>
#master {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2d4e74;
  min-height: 80vh;
  max-height: 200vh;
}
#img {
  max-width: 100%;
  height: auto;
}
#github {
  width: 100px;
  height: auto;
}
#linked {
  width: 100px;
  height: auto;
}
#description {
  text-align: left;
  height: auto;
}
#title {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  float: center;
}
#body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
