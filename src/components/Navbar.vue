<template>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
    <a  @click="goTo('/')" class="navbar-brand">My Website</a>
    <form class="d-flex">
      <button type="button" id="btn" class="btn btn-light" @click="goTo('signUp')">Sign up</button>
      <button type="button" id="btn" class="btn btn-success" @click="goTo('signIn')">Sign in</button>
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
