<template>
  <div id="container">
    <div id="title">
      Artículos destacados
      <hr />
    </div>
    <div id="main">
      <div id="backgroundText">
        <h2>Conociendo Sudáfrica</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget leo sed tortor vulputate aliquam in id lectus.
          Aenean nisl lacus, posuere ut tempor sed, viverra eu est. Fusce massa lacus, lobortis pretium lobortis vitae,
          pretium aliquet nisi. Quisque nibh tortor, auctor eget orci nec, ultricies sodales nunc. Suspendisse aliquet.
        </p>
        <button>Leer más</button>
      </div>
    </div>
    <div id="firstArticle">
      <div id="screen"></div>
      <div id="hideDiv">
        <h3>Francia</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean eget leo sed tortor vulputate aliquam in id lectus.
        </p>
        <button>Leer más</button>
      </div>
    </div>
    <div id="secondArticle">
      <div id="screen"></div>
      <div id="hideDiv">
        <h3>Italia</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean eget leo sed tortor vulputate aliquam in id lectus.
        </p>
        <button>Leer más</button>
      </div>
    </div>
    <div id="thirdArticle">
      <div id="screen"></div>
      <div id="hideDiv">
        <h3>Japón</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean eget leo sed tortor vulputate aliquam in id lectus.
        </p>
        <button>Leer más</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainArticles",
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
  width: 285px;
  margin: 0;
}

div#container div#main {
  width: 70%;
  height: 600px;
  background-image: url("../assets/southafrica_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
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

div#container div#firstArticle {
  width: 30%;
  height: 200px;
  position: absolute;
  top: 80px;
  left: 70%;
  z-index: 1;
  background-image: url("../assets/france_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
}

div#container div#firstArticle div#screen {
  width: 100%;
  height: 200px;
  background-image: url("../assets/france_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#secondArticle {
  width: 30%;
  height: 200px;
  position: absolute;
  top: 280px;
  left: 70%;
  z-index: 1;
  background-image: url("../assets/italy_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
}

div#container div#secondArticle div#screen {
  width: 100%;
  height: 200px;
  background-image: url("../assets/italy_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#thirdArticle {
  width: 30%;
  height: 200px;
  position: absolute;
  top: 480px;
  left: 70%;
  z-index: 1;
  background-image: url("../assets/japan_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
}

div#container div#thirdArticle div#screen {
  width: 100%;
  height: 200px;
  background-image: url("../assets/japan_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#screen:hover {
  opacity: 0;
}

div#container div#hideDiv {
  background-color: rgb(0, 0, 0, 0.7);
  height: 200px;
  color: white;
  text-align: center;
  font-family: "Dosis", sans-serif;
}

div#container div#hideDiv h3 {
  font-size: 25pt;
  margin: 0;
  padding-top: 15px;
  font-family: "Bebas Neue", cursive;
}

div#container div#hideDiv p {
  padding: 5px;
}

div#container div#hideDiv button {
  width: 100px;
  height: 40px;
  font-family: "Bebas Neue", cursive;
  font-size: 14pt;
  background-color: #61b983;
  color: white;
  border: none;
}
</style>