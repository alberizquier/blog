<template>
  <div id="container">
    <div id="title">
      Nuevo Artículo
      <hr />
    </div>
    <div id="post">
      <input
        id="title"
        type="text"
        v-model="article.contentTitle"
        placeholder="Escribe un título..."
      />
      <textarea
        placeholder="Escribe aquí tu artículo..."
        name="post"
        id="newPost"
        cols="30"
        rows="10"
        v-model="article.contentText"
      ></textarea>
      <input
        id="image"
        type="text"
        v-model="article.image"
        placeholder="Copia aquí el link de tu imagen..."
      />
      <select v-model="article.continent" id="continent" name="continent">
        <option>¿Sobre qué continente has escrito?</option>
        <option>Europa</option>
        <option>África</option>
        <option>América</option>
        <option>Asia</option>
        <option>Oceanía</option>
      </select>
      <br />
      <button id="public" @click="save()">Publicar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Article from "../models/Articles.js";

export default {
  name: "NewPost",
  mounted() {
    this.id_from_url = this.$route.params.id;
  },
  data() {
    return {
      id_from_url: null,
      article: new Article("", "", "", "", "", [], "", null),
      url: "http://localhost:3000/posts"
    };
  },
  methods: {
    save() {
      // const auth = {
      //   headers: { token: localStorage.getItem("token") }
      // };
      /*eslint-disable no-console*/
           console.log("this.article: ", this.article);
           
          /*eslint-disable no-console*/
      axios.post(this.url, this.article)
        .then(res => {
          /*eslint-disable no-console*/
          console.log(res);
          /*eslint-disable no-console*/
        })
        .catch(error => {
          /*eslint-disable no-console*/
          console.log(error);
          /*eslint-disable no-console*/
        });
    }
  }
};
</script>

<style scoped>
div#container {
  width: 70%;
  margin-left: 15%;
  margin-top: 30px;
  position: relative;
}

div#container div#title {
  height: 80px;
  font-family: "Bebas Neue", cursive;
  font-size: 30pt;
  color: #35495e;
}

div#container div#title hr {
  border: 2pt solid #61b983;
  width: 255px;
  margin: 0;
}

div#container div#post {
  width: 70%;
  margin-bottom: 100px;
}

div#container div#post input#title {
  max-width: 100%;
  min-width: 100%;
  max-height: 30px;
  min-height: 30px;
  padding: 10px;
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
  margin-bottom: 50px;
}

div#container div#post textarea {
  max-width: 100%;
  min-width: 100%;
  max-height: 300px;
  min-height: 300px;
  padding: 10px;
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
  margin-bottom: 30px;
}

div#container div#post input#image {
  max-width: 100%;
  min-width: 100%;
  max-height: 30px;
  min-height: 30px;
  padding: 10px;
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
  margin-bottom: 50px;
}

div#container div#post select {
  max-width: 450px;
  min-width: 450px;
  max-height: 60px;
  min-height: 60px;
  padding: 10px;
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
  margin-bottom: 50px;
  background-color: white;
}

div#container div#post button#public {
  border: none;
  background-color: #61b983;
  width: 255px;
  height: 50px;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  margin-top: 20px;
}
</style>