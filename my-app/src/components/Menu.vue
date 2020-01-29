<template>
  <div id="menu">
    <img src="../assets/logo_fag.png" alt="">
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Destinos</li>
        <li id="edge">Artículos</li>
        <li @click="setLogin()" id="buttonLogin">Login</li>
        <li @click="setRegister()" id="buttonRegister">Registrarme</li>
      </ul>
    </nav>
    <div id="login">
      <input type="text" placeholder="Email" id="email" />
      <input type="text" placeholder="Contraseña" id="pass" />
      <button>Acceder</button>
    </div>
    <div id="register">
      <input type="text" placeholder="Nombre" id="name" />
      <input type="text" placeholder="Apodo" id="nickname" />
      <input type="text" placeholder="Email" id="email" />
      <input type="text" placeholder="Contraseña" id="pass" />
      <button>Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
      setLogin: function (){
          let button = document.getElementById('login');
          /*eslint-disable no-console*/
          console.log(typeof(button.style.opacity));
          /*eslint-disable no-console*/
          if(button.style.opacity == ''){
              button.style.opacity = 1;
          } else {
              button.style.opacity = '';
          }
      },

      setRegister: function (){
          let button = document.getElementById('register');
          if(button.style.opacity == ''){
              button.style.opacity = 1;
          } else {
              button.style.opacity = '';
          }
      }
  }
};
</script>

<style scoped>
div#menu {
  width: 99%;
  height: 100px;
  padding: 10px;
  font-family: "Bebas Neue", cursive;
  position: relative;
}

div#menu img {
  position: absolute;
  width: 250px;
}

div#menu nav {
  text-align: right;
  margin-top: 35px 
}

div#menu nav ul li {
  list-style: none;
  display: inline;
  margin: 0 20px;
  font-size: 16pt;
  color: #35495e;
  text-align: center;
}

div#menu nav ul li:hover {
  color: #61b983;
}

div#menu nav ul li#edge {
  border-right: 1pt solid #35495e;
  padding: 10px 20px 10px 0px;
}

div#menu nav ul li#buttonLogin {
  border: 1pt solid #35495e;
  padding: 10px 50px;
}

div#menu nav ul li#buttonLogin:hover {
  border: 1pt solid #61b983;
}

div#menu nav ul li#buttonRegister {
  background-color: #35495e;
  color: white;
  padding: 10px 20px;
}

div#menu nav ul li#buttonRegister:hover {
  background-color: #61b983;
}

div#login {
  width: 307px;
  height: 170px;
  background-color: white;
  border: 1pt solid #35495e;
  right: 50px;
  position: absolute;
  opacity: 0;
  z-index: 10;
}

div#login input {
  width: 80%;
  height: 35px;
  margin-left: 5%;
  margin-top: 15px;
  border: 1pt solid #35495e;
  padding-left: 10%;
}

input#name, input#nickname {
  background-image: url("../assets/user.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
}

input#pass {
  background-image: url("../assets/pass.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
}

input#email {
  background-image: url("../assets/email.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
}

div#login button {
  width: 91%;
  height: 40px;
  margin-left: 5%;
  margin-top: 10px;
  background-color: #35495e;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  color: white;
}

div#login button:hover {
  background-color: #61b983;
}

div#register {
  width: 307px;
  height: 290px;
  background-color: #35495e;
  right: 50px;
  position: absolute;
  opacity: 0;
  z-index: 10;
}

div#register input {
  width: 80%;
  height: 35px;
  margin-left: 5%;
  margin-top: 15px;
  padding-left: 10%;
}

div#register button {
  width: 91%;
  height: 40px;
  margin-left: 5%;
  margin-top: 10px;
  border: 1pt solid white;
  background-color: transparent;
  font-family: "Bebas Neue", cursive;
  font-size: 18pt;
  color: white;
}

</style>