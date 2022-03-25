<template>

  <div class="about">
    <li v-for="(item,index) in articles" :key="index">
      <div v-if="item.name == user_data.email" class="card" style="width: 18rem;">
        <img :src="item.img" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
        <button type="button" id="btn" class="btn btn-secondary" @click="deleteArticle(item.id)">Delete</button>
      </div>
      </div>
    </li>
    <div id="addCard">
        <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">E-mail</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" :value="user_data.email">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <input v-model="form.descr" type="text" class="form-control" id="inputPassword">
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Image url</label>
        <div class="col-sm-10">
          <input v-model="form.image" type="text" class="form-control" id="inputPassword">
        </div>
      </div>
      <button type="button" id="btn" class="btn btn-secondary" @click="addArticle()">Create</button>
    </div>
  </div>



</template>
<script>
import {mapState, mapActions} from "vuex";
export default {
  computed: {
    ...mapState("user", ["user_data"]),
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "catalogue",
  data() {
    return {
      articles: [],
      form :{
        descr: null,
        image : null,
      }
    }
  },
  created() {
    this.getAllArticles();
  },
  methods: {
    async deleteArticle(id) {
      const {data, error } = await this.$supabase.from("articles").delete().match({ id : id })
      if (data) {
        this.getAllArticles();
      }else {
        console.log(error)
      }
    },
     goTo(name){
      this.$router.push({name: name})
    },
    async getAllArticles () {
      const {data, error } = await this.$supabase.from("articles").select()
      if(data) {
        console.log(data);
        this.articles = data;
      }else{
        console.log(error);
      }
    },
    async addArticle () {
      const { data, error } =  await this.$supabase.from("articles").insert([
        {
          name: this.user_data.email,
          description: this.form.descr,
          img: this.form.image,
          likes: 0,
        }
      ])
      if(data) {
        console.log(data);
        this.getAllArticles();
      }else{
        console.log(error);
      }
    },
  }

}
</script>

