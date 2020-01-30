<template>
  <div id="container">
    <div id="menu">
      <img src="../assets/logo_fag.png" alt />
      <nav>
        <ul>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/destinations">Destinos</router-link>
          </li>
          <li id="edge">
            <router-link to="/articles">Artículos</router-link>
          </li>
          <li @click="setLogin()" id="buttonLogin">Login</li>
          <li @click="setRegister()" id="buttonRegister">Registrarme</li>
        </ul>
      </nav>
      <div id="login">
        <input type="text" placeholder="Email" id="email" v-model="userLogin.emailLogin" />
        <input type="text" placeholder="Contraseña" id="pass" v-model="userLogin.passLogin" />
        <button @click="login()">Acceder</button>
      </div>
      <div id="register">
        <input type="text" placeholder="Nombre" id="name" v-model="userRegister.nameRegister" />
        <input type="text" placeholder="Apodo" id="nickname" v-model="userRegister.nicknameRegister" />
        <input type="text" placeholder="Email" id="email" v-model="userRegister.emailRegister" />
        <input type="text" placeholder="Contraseña" id="pass" v-model="userRegister.passRegister" />
        <button @click="register()">Enviar</button>
      </div>
    </div>
    <div id="menuActive">
      <img src="../assets/logo_fag.png" alt />
      <nav>
        <ul>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/destinations">Destinos</router-link>
          </li>
          <li id="edge">
            <router-link to="/articles">Artículos</router-link>
          </li>
          <li id="welcome">
            <img src="../assets/user.png" alt />Bienvenido, Marco Polo
          </li>
          <li id="buttonLogout" @click="changeMenu()">Logout</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      userLogin: {
        emailLogin: "",
        passLogin: ""
      },
      userRegister: {
        nameRegister: "",
        nicknameRegister: "",
        emailRegister: "",
        passRegister: ""
      }
    };
  },
  methods: {
    setLogin: function() {
      let button = document.getElementById("login");
      /*eslint-disable no-console*/
      console.log(typeof button.style.opacity);
      /*eslint-disable no-console*/
      if (button.style.opacity == "") {
        button.style.opacity = 1;
        button.style.zIndex = 11;
      } else {
        button.style.opacity = "";
        button.style.zIndex = 10;
      }
    },

    setRegister: function() {
      let button = document.getElementById("register");
      if (button.style.opacity == "") {
        button.style.opacity = 1;
      } else {
        button.style.opacity = "";
      }
    },

    changeMenu: function() {
      let menu = document.getElementById("menu");
      let menuActive = document.getElementById("menuActive");
      if (menuActive.style.opacity == "") {
        menuActive.style.opacity = 1;
        menuActive.style.zIndex = 10;
        menu.style.opacity = 0;
        menu.style.zIndex = -1;
      } else {
        menuActive.style.opacity = "";
        menuActive.style.zIndex = -1;
        menu.style.opacity = 1;
        menu.style.zIndex = 10;
      }
    },

    login: function() {
      this.$router.push("/myArticles");
      this.changeMenu();
    },

    register: function() {
      this.$router.push("/myArticles");
      this.changeMenu();
    }
  }
};
</script>

<style scoped>
div#container {
  position: relative;
}

div#menu {
  width: 99%;
  height: 100px;
  padding: 10px;
  font-family: "Bebas Neue", cursive;
  position: relative;
  opacity: 1;
  z-index: 10;
}

div#menu img {
  position: absolute;
  width: 250px;
}

div#menu nav {
  text-align: right;
  margin-top: 35px;
}

div#menu nav ul li {
  list-style: none;
  display: inline;
  margin: 0 20px;
  font-size: 16pt;
  text-align: center;
  color: #35495e;
}

div#menu nav ul li a {
  color: #35495e;
  text-decoration: none;
}

div#menu nav ul li a:hover {
  color: #61b983;
}

div#menu nav ul li#edge {
  border-right: 1pt solid #35495e;
  padding: 10px 20px 10px 0px;
}

div div#menu nav ul li#buttonLogin {
  border: 1pt solid #35495e;
  padding: 10px 50px;
}

div#menu nav ul li#buttonLogin:hover {
  border: 1pt solid #61b983;
  color: #61b983;
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

input#name,
input#nickname {
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

/* MENÚ ACTIVE */

div#menuActive {
  width: 99%;
  height: 100px;
  padding: 10px;
  font-family: "Bebas Neue", cursive;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: -1;
}

div#menuActive img {
  position: absolute;
  width: 250px;
}

div#menuActive nav {
  text-align: right;
  margin-top: 35px;
}

div#menuActive nav ul li {
  list-style: none;
  display: inline;
  margin: 0 20px;
  font-size: 16pt;
  color: #35495e;
  text-align: center;
}

div#menuActive nav ul li:hover {
  color: #61b983;
}

div#menuActive nav ul li a {
  color: #35495e;
  text-decoration: none;
}

div#menuActive nav ul li a:hover {
  color: #61b983;
}

div#menuActive nav ul li#edge {
  border-right: 1pt solid #35495e;
  padding: 10px 20px 10px 0px;
}

div#menuActive nav ul li#welcome:hover {
  color: #35495e;
}

div#menuActive nav ul li#welcome img {
  width: 20px;
  margin-right: 10px;
  margin-left: -20px;
}

div#menuActive nav ul li#buttonLogout {
  border: 1pt solid #35495e;
  padding: 10px 50px;
}

div#menuActive nav ul li#buttonLogout:hover {
  border: 1pt solid #61b983;
  color: #61b983;
}
</style>