<template>
  <div id="master" class="container mt-5">
    <b-card
      no-body
      class="overflow-hidden fluid"
      bg-variant="dark"
      text-variant="white"
    >
      <b-row>
        <b-col md="12" lg="6">
          <b-img
            rounded
            id="photo"
            :src="require(`../assets/img/img.jpeg`)"
            alt="Juan Manuel"
            fluid
          />
        </b-col>
        <b-col md="12" lg="6">
          <b-card-body
            class="mt-5 title"
            title="DESARROLLADOR FRONTEND, TESTER/QA, SOPORTE TÉCNICO"
          >
            <b-card-text class="my-5">
              <p>
                Hola, soy Juan Manuel Restrepo un
                <strong>FRONTEND DEVELOPER</strong>, he adquirido gran parte de
                mis habilidades de manera autodidacta, gracias a videos de
                YouTube o cursos, por ende cuento con conocimiento en responsive
                design y algo de diseño para la creación de increíbles sitios
                web.
              </p>
              <p>
                Soy un amante al mundo geek, las nuevas tecnologias y del cine.
                Me considero alguien capaz de aprender y enseñar, totalmente
                dispuesto a recibir las mejores críticas para mejorar en lo que
                se crea necesario, por esta y muchas razones me considero
                alguien capaz de trabajar en equipo
              </p>

              <div>
                <a href="https://github.com/juanrex04" target="_BLANK">
                  <img
                    src="../assets/img/github.png"
                    v-b-tooltip.left
                    title="GitHub"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-manuel-restrepo-moreno-6ab45a19b"
                  target="_BLANK"
                  class="mx-4"
                >
                  <img
                    src="../assets/img/linkedin.png"
                    alt="linkeIn"
                    v-b-tooltip.right
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
#photo {
  width: 80%;
  margin: 3rem;
}
.socialMedia {
  width: 120px;
  height: auto;
}

strong {
  color: rgb(214, 225, 8);
}

.title {
  align-items: center;
}
</style>
