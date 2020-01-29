<template>
  <div id="container">
    <div id="title">
      Tus Artículos
      <hr />
    </div>
    <div id="posts">
      <div id="article">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>Descubriendo Brasil</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean eget leo sed tortor vulputate aliquam in id lectus.
          </p>
          <button>Leer más</button>
        </div>
      </div>
      <div id="article">
        <div id="hideDiv">
          <h3>Nuevo Artículo</h3>
          <p>
            Estamos deseando leer algo acerca de tus últimos viajes y aventuras.
            <br>
            ¡Anímate!
          </p>
          <button>Escribir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserArea",
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

div#container div#posts div#article {
  width: 31%;
  height: 350px;
  background-image: url("../assets/brasil_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#article div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/brasil_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#article div#screen:hover {
  opacity: 0;
}

div#container div#hideDiv {
  background-color: rgb(0, 0, 0, 0.7);
  height: 100%;
  color: white;
  text-align: center;
  font-family: "Dosis", sans-serif;
}

div#container div#hideDiv h3 {
  font-size: 30pt;
  margin: 0;
  padding-top: 40px;
  font-family: "Bebas Neue", cursive;
}

div#container div#hideDiv p {
  padding: 5px;
  font-size: 16pt;
}

div#container div#hideDiv button {
  width: 150px;
  height: 60px;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  background-color: #61b983;
  color: white;
  border: none;
}

</style>