<template>
<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
    <a  @click="goTo('/')" class="navbar-brand">My Website</a>
    <form class="d-flex">
      <button v-if="!user_data.email" type="button" id="btn" class="btn btn-light" @click="goTo('signUp')">Sign up</button>
      <button v-if="!user_data.email" type="button" id="btn" class="btn btn-success" @click="goTo('signIn')">Sign in</button>
      <button v-if="user_data.email" type="button" id="btn" class="btn btn-secondary" @click="logout()">Log out</button>
    </form>
  </div>

</nav>

</template>
<script>
import {mapState, mapActions} from "vuex";
export default {
  computed: {
    ...mapState("user", ["user_data"]),
  },
  name: "navbar-item",
  methods: {
    ...mapActions("user", ["setUser"]),
    goTo(name){
      this.$router.push({name: name})
    },
    async logout() {
      const { error } = await this.$supabase.auth.signOut();
      if (error) {
        console.log(error)
      }else {
        this.setUser({});
        this.goTo("home");
      }
    }
  }
};
</script>
