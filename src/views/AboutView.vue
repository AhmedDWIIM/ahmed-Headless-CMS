<template>
  <div class="about">
    <h1>This is an about page</h1>
    <li v-for="(item,index) in articles" :key="index">
    <pre> {{item}} </pre>
    <button type="button" id="btn" class="btn btn-secondary" @click="deleteArticle(item.id)">Delete</button>
    </li>

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

