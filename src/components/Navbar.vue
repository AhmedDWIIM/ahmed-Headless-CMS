<template>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <button type="button" id="btn" class="btn btn-light" @click="goTo('signUp')">Sign up</button>
      <button type="button" id="btn" class="btn btn-light" @click="goTo('signIn')">Sign in</button>
    </form>
  </div>
</nav>

</template>
<script>

export default {
  name: "navbar-item",
  methods : {
    goTo(name){
      this.$router.push({name: name})
    }
  }
};
</script>
