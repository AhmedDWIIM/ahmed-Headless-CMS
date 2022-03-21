<template>
  <div>
    <h2>Sign In</h2>
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
  <button @click="loginUser()" type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

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
        async loginUser(){
            const {data: user, error} = await this.$supabase.auth.signIn({
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
