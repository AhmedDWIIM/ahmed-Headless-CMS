<template>
  <div id="app">
    <Navbar />
    <nav v-if="user_data.email">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">My profile</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import {mapState, mapActions} from "vuex";
export default {
   computed: {
    ...mapState("user", ["user_data"]),
  },
  components: {
    Navbar
  }
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
