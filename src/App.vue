<template>
  <div id="app">
    <div>
      <b-navbar id="navBar" toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand :to="{name: 'Me'}">
          Juan Manuel Restrepo Moreno
        </b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name:'About'}">Juegos</b-nav-item>
            <b-nav-item >Usuario</b-nav-item>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
