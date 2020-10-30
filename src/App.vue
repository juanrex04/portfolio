<template>
  <div id="app">
    <b-navbar id="navBar" toggleable="lg" type="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Me' }"
          >Juan Manuel Restrepo Moreno</b-navbar-brand
        >
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'skill' }">Habilidades y Conocimiento</b-nav-item            >
            <b-nav-item :to="{ name: 'curriculum' }">Curriculum</b-nav-item>
            <b-nav-item :to="{ name: 'portfolio' }">Portafolio</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2d4e74;
  min-height: 100vh;
}
#navBar {
  background-color: #232f3e;
}

</style>
