<template>
  <div>

<div id="form">
  <!-- Email input -->
  <h2 id="myTitle">Sign Up</h2>
  <div class="form-outline mb-4">
    <input v-model="email" type="email" id="form2Example1" class="form-control" placeholder="Email address" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input v-model="password" type="password" id="form2Example2" class="form-control" placeholder="Password" />
  </div>

  <!-- 2 column grid layout for inline styling -->

  <!-- Submit button -->
  <button @click="createUser()" type="button" class="btn btn-dark">Sign up</button>

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
            const {data: user, error} = await this.$supabase.auth.signUp({
                email:this.email,
                password:this.password,
            })
            if(user){
              console.log(user);
              console.log("connected");
            }
            else if(error){
              console.log(error);
            }
        }
    }
}
</script>
