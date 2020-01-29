<template>
  <div id="container">
    <div id="title">
      Elige tu continente
      <hr />
    </div>
    <div id="continents">
      <div id="europ">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>Europa</h3>
          <button>Ver artículos</button>
        </div>
      </div>
      <div id="africa">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>Africa</h3>
          <button>Ver artículos</button>
        </div>
      </div>
      <div id="america">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>América</h3>
          <button>Ver artículos</button>
        </div>
      </div>
      <div id="asia">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>Asia</h3>
          <button>Ver artículos</button>
        </div>
      </div>
      <div id="oceania">
        <div id="screen"></div>
        <div id="hideDiv">
          <h3>Oceanía</h3>
          <button>Ver artículos</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destinations",
  data() {
    return {};
  }
};
</script>

<style scoped>
div#container {
  width: 70%;
  margin: 30px 15% 100px;
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

div#container div#continents {
  text-align: center
}

div#container div#continents div#europ {
  width: 31%;
  height: 350px;
  background-image: url("../assets/spain_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#europ div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/spain_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#continents div#africa {
  width: 31%;
  height: 350px;
  background-image: url("../assets/namibia_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#africa div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/namibia_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#continents div#america {
  width: 31%;
  height: 350px;
  background-image: url("../assets/brasil_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#america div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/brasil_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#continents div#asia {
  width: 31%;
  height: 350px;
  background-image: url("../assets/philippines_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#asia div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/philippines_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
}

div#container div#continents div#oceania {
  width: 31%;
  height: 350px;
  background-image: url("../assets/nz_pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  margin: 0 1% 1%;
  position: relative;
}

div#container div#oceania div#screen {
  width: 100%;
  height: 100%;
  background-image: url("../assets/nz_pic.png");
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
  height: 100%;
  color: white;
  text-align: center;
  font-family: "Dosis", sans-serif;
}

div#container div#hideDiv h3 {
  font-size: 40pt;
  margin: 0;
  padding: 60px 0;
  font-family: "Bebas Neue", cursive;
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
</style>>
