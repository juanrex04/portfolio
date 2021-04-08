<template>
  <div id="app">
    <b-navbar id="navBar" toggleable="lg" type="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'Me' }"
          >Juan Manuel Restrepo</b-navbar-brand
        >
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="navLinks" :to="{ name: 'skill' }"
              >Tecnologías y Conocimiento</b-nav-item
            >
            <b-nav-item class="navLinks" :to="{ name: 'curriculum' }">Curriculum</b-nav-item>
            <b-nav-item class="navLinks" :to="{ name: 'portfolio' }">Portafolio</b-nav-item>
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: linear-gradient(to left, #03506f, #a3ddcb) no-repeat
    center center fixed;
}

#app {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ffe3de;
}

.navLinks{
  font-size: 18px;
}

#navBar {
  background-color: #276678;
  position: sticky;
}
</style>
