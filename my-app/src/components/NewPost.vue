<template>
  <div id="container">
    <div id="title">
      Nuevo Artículo
      <hr />
    </div>
    <div id="post">
        <button id="image">Agregar imagen</button>
        <br>
        <textarea placeholder="Escribe aquí tu artículo..." name="post" id="newPost" cols="30" rows="10"></textarea>
        <br>
        <button id="public">Publicar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPost",
  data() {
    return {};
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
}

div#container div#post button#image {
  border: none;
  background-color: #35495e;
  width: 255px;
  height: 50px;
  color: white;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
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