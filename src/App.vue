<template>
  <div id="app">
    <b-navbar id="navBar" toggleable="lg" type="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Me' }"
          >Juan Manuel Restrepo Moreno</b-navbar-brand
        >
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'skill' }"
              >Tecnologías y Conocimiento</b-nav-item
            >
            <b-nav-item :to="{ name: 'curriculum' }">Curriculum</b-nav-item>
            <b-nav-item :to="{ name: 'portfolio' }">Portafolio</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__backInDown"
      >
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<style>
body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: linear-gradient(to left, #2d4e74, rgba(232, 74, 42)) no-repeat
    center center fixed;
  font-size: 15px;
}
#app {
  text-align: center;
}

#navBar {
  background-color: #232f3e;
  position: sticky;
}
</style>
