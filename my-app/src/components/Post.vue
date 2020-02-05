<template>
  <div id="container">
    <div id="title">
      {{article.contentTitle}}
      <hr />
    </div>
    <img :src="article.image" alt />
    <div id="content">
      <span id="authorPost">{{article.authorName}}</span>
      <br />
      <span id="datePost">{{article.date}}</span>
      <p>{{article.contentText}}</p>
    </div>
    <div id="otherPosts">
      <h3>Artículos relacionados</h3>
      <hr />
      <div id="morePosts">
        <div id="relationPost" v-for="article in articles.slice(2,6)" :key="article._id">
          <router-link :to="{ name: 'Post', params: {id: article._id} }">
            <img :src="article.image" alt />
          </router-link>
          <h4>{{article.contentTitle}}</h4>
        </div>
      </div>
    </div>
    <div id="comments">
      Comentarios
      <hr>

      <div id="comment" v-for="comment of article.commentsList" :key="comment._id">
        <span id="dateComment">{{comment.date}}</span>
        <h4>{{comment.authorCommentNickname}}, dijo:</h4>
        <p>{{comment.commentContent}}</p>
        <hr />
      </div>
      <div id="newComment">
        <h4>Publicar un comentario:</h4>
        <textarea name="comment" id cols="30" rows="10" v-model="comment.commentContent"></textarea>
        <button @click="saveComment()">Publicar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Comment from "../models/Comments";

export default {
  name: "Post",
  mounted() {
    const articleId = this.$route.params.id;
    this.getArticle(articleId);
    this.getArticles();
  },
  updated (){
    const articleId = this.$route.params.id;
    this.getArticle(articleId)
  },
  data() {
    return {
      articles: [],
      article: {},
      comment: new Comment("", "", "", null),
      comments: [],
      url: "http://localhost:3000/posts/"
    };
  },
  methods: {
    getArticle: function(articleId) {
      axios.get(this.url + articleId).then(res => {
        if (res.data.ok) {
          this.article = res.data.post;
          const day = this.article.date.substr(8, 2);
          const month = this.article.date.substr(5, 2);
          const year = this.article.date.substr(0, 4);
          this.article.date = day + " - " + month + " - " + year;
          /*eslint-disable no-console*/
          console.log();
          /*eslint-disable no-console*/
        }
      });
    },
    getArticles() {
      axios.get(this.url).then(res => {
        if (res.data.ok) {
          this.articles = res.data.posts;
          /*eslint-disable no-console*/
          console.log();
          /*eslint-disable no-console*/
        }
      });
    },
    saveComment: function() {
      let token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      axios
        .post(this.url + this.article._id + "/comments", this.comment, config)
        .then(res => {
          this.comment = res.data.comment;
          /*eslint-disable no-console*/
          console.log("authorCommentNickname:",this.comment.authorCommentNickname);
          /*eslint-disable no-console*/
          this.getArticle(this.article._id);
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
  height: auto;
  margin-left: 15%;
  margin-top: 30px;
  margin-bottom: 300px;
  position: relative;
}

div#container div#title {
  height: 80px;
  font-family: "Bebas Neue", cursive;
  font-size: 30pt;
  color: #35495e;
  margin-bottom: 10px;
}

div#container div#title hr {
  border: 2pt solid #61b983;
  width: 255px;
  margin: 0;
}

div#container img {
  max-width: 70%;
  margin-bottom: 20px;
}

div#container div#content span#datePost {
  color: #61b983;
  font-size: 16pt;
  font-family: "Bebas Neue", cursive;
}

div#container div#content span#authorPost {
  color: #35495e;
  font-size: 16pt;
  font-family: "Bebas Neue", cursive;
}

div#container div#content {
  width: 70%;
}

div#container div#content p {
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
}

div#container div#otherPosts {
  width: 25%;
  height: 100%;
  position: absolute;
  margin-top: 80px;
  margin-left: 75%;
  top: 0;
}

div#container div#otherPosts h3 {
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  color: #35495e;
  margin: 0;
}

div#container div#otherPosts hr {
  border: 0.9pt solid #61b983;
  width: 100px;
  margin: 0;
}

div#container div#otherPosts div#relationPost img {
  margin-top: 10px;
  margin-bottom: 0;
  width: 100%;
}

div#container div#otherPosts div#relationPost h4 {
  font-family: "Bebas Neue", cursive;
  font-size: 16pt;
  color: #35495e;
  margin: 5px 0;
}

div#container div#comments {
  height: 80px;
  margin-top: 50px;
  font-family: "Bebas Neue", cursive;
  font-size: 30pt;
  color: #35495e;
}

div#container div#comments hr {
  border: 2pt solid #61b983;
  width: 255px;
  margin: 0;
}

div#container div#comments div#comment span#dateComment {
  color: #61b983;
  font-size: 16pt;
}

div#container div#comments div#comment h4 {
  color: #35495e;
  font-size: 20pt;
  margin: 5px 0;
}

div#container div#comments div#comment p {
  font-family: "Dosis", sans-serif;
  font-size: 16pt;
  color: black;
}

div#container div#comments div#comment hr {
  width: 100%;
  border: 0.25pt solid #35495e;
  margin-bottom: 50px;
}

div#container div#comments div#newComment {
  position: relative;
}

div#container div#comments div#newComment h4 {
  color: #35495e;
  font-size: 16pt;
}

div#container div#comments div#newComment textarea {
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
  min-height: 200px;
  border: 0.25pt solid #35495e;
  margin-bottom: 100px;
  padding: 10px;
  font-family: "Dosis", sans-serif;
  font-size: 14pt;
  color: black;
}

div#container div#comments div#newComment button {
  width: 150px;
  height: 50px;
  background-color: #61b983;
  border: none;
  position: absolute;
  bottom: 130px;
  right: 0;
  font-family: "Bebas Neue", cursive;
  font-size: 16pt;
  color: white;
}
</style>