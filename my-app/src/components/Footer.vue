<template>
  <footer>
    <ul>
      <li id="noLink">Copyright © 2020 findaguide.com, todos los derechos reservados</li>
      <li>AVISO LEGAL</li>
      <li>POLÍTICA DE PRIVACIDAD</li>
      <li>POLÍTICA DE COOKIES</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped>

footer {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    background-color: #35495e;
    padding-top: 5px;
}

footer ul{
    list-style: none;
    text-align: center;
}

footer ul li{
    display: inline;
    font-family: "Dosis", sans-serif;
    color: white;
    padding: 0 20px;
    border-left: 1pt solid white;
}

footer ul li:hover{
    color: #61b983;
}

footer ul li#noLink{
    border: none
}

footer ul li#noLink:hover{
    border: none;
    color: white;
}

</style>