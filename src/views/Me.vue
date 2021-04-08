<template>
  <div id="master" class="container mt-5">
    <b-row>
      <b-col md="12" lg="6">
        <b-img
          id="photo"
          :src="require(`../assets/img/img.jpeg`)"
          alt="Juan Manuel"
          fluid
        />
      </b-col>
      <b-col md="12" lg="6">
        <div>
          <h4 class="mx-5 mt-5">
            DESARROLLADOR FRONTEND, TESTER/QA, SOPORTE TÉCNICO
          </h4>
          <div class="present">
            <p>
              Hola, soy Juan Manuel Restrepo un
              <strong>FRONTEND DEVELOPER</strong>, he adquirido gran parte de
              mis habilidades de manera autodidacta, gracias a videos de YouTube
              o cursos, por ende cuento con conocimiento en responsive design y
              algo de diseño para la creación de increíbles sitios web.
            </p>
            <p>
              Soy un amante al mundo geek, las nuevas tecnologias y del cine. Me
              considero alguien capaz de aprender y enseñar, totalmente
              dispuesto a recibir las mejores críticas para mejorar en lo que se
              crea necesario, por esta y muchas razones me considero alguien
              capaz de trabajar en equipo
            </p>
          </div>
          <div>
            <a href="https://github.com/juanrex04" target="_BLANK">
              <img
                src="../assets/img/github.png"
                class="socialMedia"
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
                class="socialMedia"
                alt="linkeIn"
                v-b-tooltip.right
                title="LinkedIn"
              />
            </a>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
  </div>
</template>

<script>
export default {};
</script>
<style>
p {
  font-size: 18px;
}

strong {
  color: #0a043c;
}
#photo {
  width: 80%;
  border-radius: 5rem;
}
.socialMedia {
  width: 100px;
  height: auto;
}

.present{
  padding: 1rem 3rem;
}
</style>
