<template>
  <div id="app" class="">
    <div>
      <b-navbar id="navBar" toggleable="lg" type="dark">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-navbar-brand :to="{name: 'Me'}">Juan Manuel Restrepo Moreno</b-navbar-brand>
          <b-collapse is-nav id="nav-collapse">
            <b-navbar-nav>
              <b-nav-item :to="{name:'skill'}">Habilidades y Conocimiento</b-nav-item>
              <b-nav-item :to="{name:'curriculum'}">Curriculum</b-nav-item>
              <b-nav-item :to="{name:'portfolio'}">Portafolio</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <b-container>
        <router-view />
      </b-container>
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #182a3f;
  
}
#navBar {
  background-color: #232f3e;
}
</style>
