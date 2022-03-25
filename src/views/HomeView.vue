<template>
  <div class="about">
    <div id="card">
    <h1>Feed</h1>
    <li v-for="(item,index) in articles" :key="index">
      <div class="card" style="width: 18rem;">
        <img :src="item.img" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
      </div>
      </div>
    </li>
    </div>

  </div>

</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "catalogue",
  data() {
    return {
      articles: [],
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
    async getAllArticles () {
      const {data, error } = await this.$supabase.from("articles").select()
      if(data) {
        console.log(data);
        this.articles = data;
      }else{
        console.log(error);
      }
    },
  }

}
</script>

