<template>
  <div id="container">
    <div id="menu">
      <router-link to="/"><img src="../assets/logo_fag.png" alt /></router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li id="edge">
            <router-link to="/articles">Artículos</router-link>
          </li>
          <li @click="setLogin()" id="buttonLogin">Login</li>
          <li @click="setRegister()" id="buttonRegister">Registrarme</li>
        </ul>
      </nav>
      <div id="login">
        <input type="text" placeholder="Email" id="emailLogin" v-model="userLogin.email" />
        <input type="password" placeholder="Contraseña" id="passLogin" v-model="userLogin.password" />
        <button id="confirm" @click="login()">Acceder</button>
        <input
          type="text"
          id="incorrect"
          placeholder="¡Oh no, usuario o contraseña incorrectos!"
          readonly="readonly"
        />
      </div>
      <div id="register">
        <input type="text" placeholder="Nombre" id="name" v-model="userRegister.name" />
        <input type="text" placeholder="Apodo" id="nickname" v-model="userRegister.nickname" />
        <input type="text" placeholder="Email" id="email" v-model="userRegister.email" />
        <input type="password" placeholder="Contraseña" id="pass" v-model="userRegister.password" />
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
          <li id="edge">
            <router-link to="/articles">Artículos</router-link>
          </li>
          <li id="welcome">
            <img src="../assets/user.png" alt />
            Bienvenido, {{userLogin.name}}
          </li>
          <li id="buttonLogout" @click="changeMenu()">Logout</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      userRegister: {
        name: "",
        nickname: "",
        email: "",
        password: "",
        role: "publisher"
      },
      url: "http://localhost:3000/users"
    };
  },
  methods: {
    setLogin: function() {
      let button = document.getElementById("login");
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
      let emailLogin = document.getElementById("emailLogin");
      let passLogin = document.getElementById("passLogin");
      let incorrect = document.getElementById("incorrect");
      let divLogin = document.getElementById("login");
      if (emailLogin.value == "" && passLogin.value == "") {
        incorrect.style.visibility = "visible";
        divLogin.style.height = "200px";
      } else {
        axios
          .post(this.url + "/login", this.userLogin)
          .then(res => {
            if (res.data.ok) {
              this.userLogin = res.data.user;
              const token = "Bearer " + res.data.token;
              localStorage.setItem("token", token); 
              localStorage.setItem("user", this.userLogin);
              axios.defaults.headers.common["Authorization"] = token;
              this.$router.push("/articles");
              this.changeMenu();
            }
          })
          .catch(error => {
            incorrect.style.visibility = "visible";
            divLogin.style.height = "200px";
            /*eslint-disable no-console*/
            console.log(error);
            console.log("Usuario o contraseña incorrecto");
            /*eslint-disable no-console*/
          });
      }
    },

    logout: function() {
      this.$router.push("/home");
      this.changeMenu();
    },

    register: function() {
      axios
        .post(this.url, this.userRegister)
        .then(res => {
          if (res.data.ok) {
            this.userRegister = res.data.user;
            /*eslint-disable no-console*/
            console.log("Usuario creado correctamente");
            /*eslint-disable no-console*/
          }
        })
        .catch(error => {
          /*eslint-disable no-console*/
          console.log(error);
          console.log("No se pudo crear el usuario");
          /*eslint-disable no-console*/
        });
      this.setRegister();
      this.setLogin();
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

div#login input#emailLogin {
  background-image: url("../assets/email.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
}

div#login input#passLogin {
  background-image: url("../assets/pass.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
}

div#login input#incorrect {
  width: 90%;
  height: 35px;
  margin-left: 5%;
  margin-top: 0;
  border: none;
  padding-left: 0;
  text-align: center;
  background-color: rgb(255, 255, 255, 0);
  visibility: hidden;
}

div#login input#incorrect::placeholder {
  color: red;
  font-weight: bold;
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