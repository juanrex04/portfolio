<template>
  <div class="container mt-4">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col>
          <b-card
            :img-src="require(`@/assets/img/photo.jpg`)"
            alt="Juan"
          ></b-card>
        </b-col>
        <b-col>
          <b-card-body
            title="Desarrollador fronted, Tester/QA, Soporte técnico"
            class="my-5"
          >
            <b-card-text class="my-5">
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
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div class="container my-2 mx-4">
      <a href="https://github.com/juanrex04" target="_BLANK">
        <img id="github" src="../assets/img/github.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-manuel-restrepo-moreno-6ab45a19b"
        target="_BLANK"
        class="mx-4"
      >
        <img id="linked" src="../assets/img/linkedin.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
#github {
  width: 100px;
}
#linked {
  width: 100px;
}
#description {
  text-align: left;
}
</style>
