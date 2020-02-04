<template>
  <div id="container">
    <div id="title">
      Nuestros Artículos
      <hr />
    </div>
    <div id="posts">
      <div id="article" v-for="article in articles" :key="article._id">
        <div id="hideDiv">
          <router-link
            :to="{ name: 'Post', params: {id: article._id} }"
          ><img id="imgSup" :src="article.image" alt= /></router-link>
          <h3>{{article.contentTitle}}</h3>
          <p>{{article.contentText}}</p>
          <p>{{article.date.toString()}}</p>
          <button>Leer más</button>
          <img id="imgBkg" :src="article.image" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Articles",
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      articles: [],
      url: "http://localhost:3000/posts"
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url).then(res => {
        if (res.data.ok) {
          this.articles = res.data.posts;
          for(let article in this.articles){
          const day = this.articles[article].date.substr(8, 2);
          const month = this.articles[article].date.substr(5, 2);
          const year = this.articles[article].date.substr(0, 4);
          const beautyDate = day + ' - ' + month + ' - ' + year;
          this.articles[article].date = beautyDate;
          /*eslint-disable no-console*/
          //console.log(beautyDate);
          /*eslint-disable no-console*/
          }
          // this.article = res.data.post;
          // this.articles.date = day + ' - ' + month + ' - ' + year + ', ' + hour;
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
  margin-bottom: 100px;
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

div#container div#posts div#article {
  width: 31%;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#hideDiv {
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  height: 350px;
  overflow: hidden;
  position: relative;
  color: white;
  text-align: center;
  font-family: "Dosis", sans-serif;
}

div#container div#article div#hideDiv img#imgBkg {
  position: absolute;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 1;
}

div#container div#article div#hideDiv img#imgSup {
  position: absolute;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#article div#hideDiv img#imgSup:hover {
  opacity: 0;
}

div#container div#hideDiv h3 {
  font-size: 30pt;
  margin: 0;
  padding-top: 40px;
  font-family: "Bebas Neue", cursive;
}

div#container div#hideDiv p {
  font-size: 16pt;
  width: 80%;
  margin: 20px auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

div#container div#hideDiv button {
  width: 150px;
  height: 60px;
  background-color: #61b983;
  border: none;
}

div#container div#hideDiv button {
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  color: white;
  text-decoration: none;
}
</style>