<template>
  <div id="container">
    <div id="title">
      Artículos destacados
      <hr />
    </div>
    <div id="main" v-for="article in articles.slice(0,1)" :key="article._id">
      <div id="backgroundText">
        <h2>{{article.contentTitle}}</h2>
        <p>{{article.contentText}}</p>
        <router-link :to="{ name: 'Post', params: {id: article._id} }">
          <button>Leer más</button>
        </router-link>
      </div>
      <img :src="article.image" alt />
    </div>
    <div id="seconds">
      <div id="article" v-for="article in articles.slice(1,4)" :key="article._id">
        <router-link :to="{ name: 'Post', params: {id: article._id} }">
          <img id="imgSup" :src="article.image" alt />
        </router-link>
        <h3>{{article.contentTitle}}</h3>
        <p>{{article.contentText}}</p>
        <button>Leer más</button>
        <img id="imgBkg" :src="article.image" alt />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainArticles",
  mounted() {
    this.getArticle();
  },
  data() {
    return {
      articles: [],
      url: "http://localhost:3000/posts"
    };
  },
  methods: {
    getArticle() {
      axios.get(this.url).then(res => {
        if (res.data.ok) {
          this.articles = res.data.posts;
          /*eslint-disable no-console*/
          console.log();
          /*eslint-disable no-console*/
        }
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
  width: 285px;
  margin: 0;
}

div#container div#main {
  width: 70%;
  height: 600px;
  position: relative;
}

div#container div#main img {
  width: 100%;
  height: 100%;
  object-position: center center;
}

div#container div#main div#backgroundText {
  width: 100%;
  height: 200px;
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  top: 400px;
}

div#container div#main div#backgroundText h2 {
  color: white;
  font-family: "Dosis", sans-serif;
  font-size: 30pt;
  margin: 15px 0 0 20px;
}

div#container div#main div#backgroundText p {
  color: white;
  font-family: "Dosis", sans-serif;
  margin: 0 20px 0;
  font-size: 14pt;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

div#container div#main div#backgroundText button {
  width: 150px;
  height: 40px;
  margin-top: 10px;
  margin-left: 80%;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  background-color: #61b983;
  color: white;
  border: none;
}

div#container div#seconds {
  width: 30%;
  height: 600px;
  position: absolute;
  top: 80px;
  left: 70%;
}

div#container div#article {
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  color: white;
  text-align: center;
  font-family: "Dosis", sans-serif;
}

div#container div#article img#imgBkg {
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 1;
}

div#container div#article img#imgSup {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#article img#imgSup:hover {
  opacity: 0;
}

div#container h3 {
  font-size: 25pt;
  margin: 0;
  padding-top: 30px;
  font-family: "Bebas Neue", cursive;
}

div#container p {
  font-size: 14pt;
  width: 80%;
  margin: 20px auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

div#container button {
  width: 100px;
  height: 40px;
  background-color: #61b983;
  border: none;
  color: white;
  font-family: "Bebas Neue", cursive;
}

div#container button {
  font-family: "Bebas Neue", cursive;
  font-size: 14pt;
  color: white;
  text-decoration: none;
}
</style>