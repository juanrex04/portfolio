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
          <b-card id="photo">
            <b-img
              rounded
              id="img"
              :src="require(`../assets/img/img.jpeg`)"
              alt="Juan Manuel"
              fluid
          /></b-card>
        </b-col>
        <b-col md="12" lg="6">
          <b-card-body class="my-3"
            title="Desarrollador fronted, Tester/QA, Soporte técnico"
          >
            <b-card-text class="mt-3">
              <p>
                Soy un joven que desea crecer cada dia adquiriendo más
                conocimiento para el desarrollo web y el soporte técnico.
              </p>
              <p>
                Soy un amante al mundo geek, las nuevas tecnologias y del cine.
                Me considero alguien capaz de aprender y enseñar, totalmente
                dispuesto a recibir las mejores críticas para mejorar en lo que
                se crea necesario, por esta y muchas razones me considero
                alguien capaz de trabajar en equipo
              </p>

              <div class="mt-5">
                <a href="https://github.com/juanrex04" target="_BLANK">
                  <img
                    id="gitHub"
                    src="../assets/img/github.png"
                    v-b-tooltip
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
                    v-b-tooltip
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
#photo{
  width: 100%;
}
#img {
  width: 350px;
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
