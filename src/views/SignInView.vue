<template>
  <div>

<div id="form">
   <h2 id="myTitle">S’identifier</h2>
  <!-- Email input -->
  <div class="form-outline mb-4">
    <input v-model="email" type="email" id="form2Example1" class="form-control" placeholder="Email address" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input v-model="password" type="password" id="form2Example2" class="form-control" placeholder="Password"/>
  </div>

  <!-- 2 column grid layout for inline styling -->

  <!-- Submit button -->
  <button @click="loginUser()" type="button" class="btn btn-dark">Sign in</button>

</div>
</div>

</template>
<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            email: "",
            password: "",
        }
    },
    name:"signUp",
    methods:{
      ...mapActions('user', ["setUser"]),
       goTo(name){
      this.$router.push({name: name})
      },
        async loginUser(){
            const {data: user, error} = await this.$supabase.auth.signIn({
                email:this.email,
                password:this.password,
            })
            if(user){
              console.log(user);
              this.goTo('home');
            }
            else if(error){
              console.log(error);
            }
        }
    }
}
</script>
