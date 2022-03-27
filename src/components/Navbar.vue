<template>
<nav class="navbar navbar-light bg-light">
<div class="container-fluid">
    <a  @click="goTo('/')" class="navbar-brand">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
        <title>LinkedIn</title>

        <g>
          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
        </g>
      </svg>
    </a>

    <div v-if="user_data.email">
      <router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></router-link>  |
      <router-link to="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></router-link>
    </div>

    <form class="d-flex">
      <button v-if="!user_data.email" type="button" id="btn" class="btn btn-outline-dark" @click="goTo('signIn')">Login</button>
      <button v-if="!user_data.email" type="button" id="btn" class="btn btn-dark" @click="goTo('signUp')">Sign up</button>
      <button v-if="user_data.email" type="button" id="btn" class="btn btn-dark" @click="logout()">Log out</button>
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
        this.goTo("signUp");
      }
    }
  }
};
</script>
