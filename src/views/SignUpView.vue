<template>
  <div>
    <h1>Sign Up</h1>
    <button type="button" id="btn" class="btn btn-primary" @click="createUser()">Create User</button>
  </div>
</template>
<script>
export default {
    name:"signUp",
    methods:{
        async createUser(){
            const {data: user, error} = await this.$supabase.auth.api.createUser({
                email:'a@gmail.com',
                password:'1234',
            })
            if(user){
              consol.log(user);
            }
            else if(error){
              consol.log(error);
            }
        }
    }
}
</script>
