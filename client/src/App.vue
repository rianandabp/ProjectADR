<template>
  <div id="app">
    <div id="nav">
      <router-link class="navButton" to="/project"> Project </router-link>
      <router-link class="navButton" to="/customer"> Customer </router-link>
      <router-link class="navButton" to="/car">Car </router-link>
      <router-link class="navButton" to="/profile"> Profile </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
  components: {}
})
export default class App extends Vue {
    
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color:black;
  a {
    font-weight:bold;
    color: #ffffff;
    text-decoration: none;
  }
}

.navButton{
  margin-left: 15px;
}

</style>
