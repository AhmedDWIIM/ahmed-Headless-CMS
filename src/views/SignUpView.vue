<template>
  <div>
    <h2>Sign Up</h2>
<div id="form">
  <!-- Email input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example1">Email address</label>
    <input v-model="email" type="email" id="form2Example1" class="form-control" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <label class="form-label" for="form2Example2">Password</label>
    <input v-model="password" type="password" id="form2Example2" class="form-control" />
  </div>

  <!-- 2 column grid layout for inline styling -->

  <!-- Submit button -->
  <button @click="createUser()" type="button" class="btn btn-primary btn-block mb-4">Sign up</button>

</div>
</div>

</template>
<script>
export default {
    data(){
        return{
            email: "",
            password: "",
        }
    },
    name:"signUp",
    methods:{
        async createUser(){
            const {data: user, error} = await this.$supabase.auth.api.createUser({
                email:this.email,
                password:this.password,
            })
            if(user){
              console.log(user);
            }
            else if(error){
              console.log(error);
            }
        }
    }
}
</script>
