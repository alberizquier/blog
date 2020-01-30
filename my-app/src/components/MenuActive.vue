<template>
<div id="menu">
    <nav>
        <ul>
            <li><router-link to='/'>Inicio</router-link></li>
            <li><router-link to='/destinations'>Destinos</router-link></li>
            <li id="edge"><router-link to='/articles'>Artículos</router-link></li>
            <li id="welcome"><img src="../assets/user.png" alt="">Bienvenido, Marco Polo</li>
            <li id="buttonLogout">Logout</li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name: 'MenuActive',
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>

div#menu{
    width: 99%;
    height: 100px;
    padding: 10px;
    font-family: 'Bebas Neue', cursive;
}

div#menu nav{
    text-align: right;
}

div#menu nav ul li{
    list-style: none;
    display: inline;
    margin: 0 20px;
    font-size: 16pt;
    color:#35495e;
    text-align: center;
}

div#menu nav ul li:hover{
    color:#61b983;
}

div#menu nav ul li#edge{
    border-right: 1pt solid #35495e;
    padding: 10px 20px 10px 0px;
}

div#menu nav ul li#welcome:hover {
    color: #35495e;
}

div#menu nav ul li#welcome img{
    width: 20px;
    margin-right: 10px;
    margin-left: -20px;
}

div#menu nav ul li#buttonLogout {
  border: 1pt solid #35495e;
  padding: 10px 50px;
}

</style>