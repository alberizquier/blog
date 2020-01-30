<template>
  <div id="container">
    <div id="title">
      Viaje por los rincones de Nueva Zelanda
      <hr />
    </div>
    <img src="../assets/nz_pic.png" alt />
    <div id="content">
      <span id="authorPost">Marco Polo</span>
      <br>
      <span id="datePost">29/01/2020, 16:17</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo venenatis tempus. Donec sed tortor eget lorem sagittis faucibus.
        Aliquam hendrerit nulla nunc. Nullam rutrum libero vel eros ornare luctus. Sed ornare tincidunt justo a sagittis. Proin pellentesque ac turpis
        a porttitor. Cras volutpat volutpat arcu, id semper diam auctor vitae. Quisque eget sodales velit. Aliquam consectetur congue vehicula. Quisque
        ornare, tortor non suscipit faucibus, est massa tempor neque, a volutpat nisi neque quis ex. Phasellus consequat aliquet justo vitae dignissim.
        Aliquam erat volutpat. Proin sed feugiat velit, at lacinia nulla. Quisque efficitur porttitor hendrerit.
      </p>
      <p>
        Sed orci sapien, porta pellentesque urna et, egestas dignissim sem. Proin mollis mattis nisl vitae mollis. Morbi aliquet scelerisque turpis,
        a tristique felis vestibulum eu. Ut feugiat nulla elit, eu viverra quam sodales semper. Nunc ac viverra urna, in mattis sem. Integer fermentum,
        enim ut gravida interdum, velit ex ornare erat, eu aliquam nibh sem non nisl. Nunc vestibulum porttitor sapien, ut fringilla nulla dignissim ut.
        Donec at vestibulum eros, sed faucibus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nisl
        nisi, congue eget est eleifend, molestie vulputate erat. Nulla gravida et velit sit amet scelerisque. Mauris eu eros sit amet leo pretium dignissim
        ut et eros. Phasellus venenatis posuere tortor, at gravida dui. Donec eget sem vel lorem ultrices iaculis ultricies id lorem. Pellentesque tempor,
        tellus ac maximus molestie, turpis elit consectetur risus, vitae pharetra sem nulla in ligula.
      </p>
      <p>
        In in nisl consequat, tincidunt dolor fringilla, tristique tortor. Aenean hendrerit faucibus urna ac consequat. Suspendisse faucibus, dui sed
        blandit iaculis, turpis odio ultricies purus, quis gravida tellus urna ut mi. Pellentesque mi massa, congue sit amet ligula ac, accumsan placerat
        odio. Nunc auctor dignissim accumsan. Aliquam ut nunc lacinia, ornare felis quis, dignissim odio. Phasellus ligula enim, dictum at augue a,
        tincidunt mattis nisi. Proin ac faucibus justo, ac tristique turpis. Nam laoreet pretium lorem, vel gravida nulla bibendum sit amet. Nullam a
        libero et tellus condimentum pellentesque. Curabitur et semper elit, et cursus justo. Etiam mattis eleifend elit, nec sollicitudin elit ullamcorper
        quis. Nunc faucibus in mauris non sagittis. Suspendisse potenti. Nulla quis ultrices justo, quis lacinia odio. Nullam in augue in mauris hendrerit
        gravida ut vitae libero.
      </p>
      <p>
        Mauris aliquam vitae lorem et interdum. Donec non tortor quis lectus euismod suscipit. Duis fringilla diam id dui facilisis, sit amet commodo enim
        tincidunt. Pellentesque sit amet bibendum lacus, a posuere purus. Ut semper efficitur enim non ultricies. Morbi ultrices, arcu sed aliquam aliquet,
        massa lorem finibus diam, vel molestie sem metus eget dolor. Aenean at neque vitae metus porta placerat ut tempus urna. Vestibulum molestie ante eu
        tortor gravida, in porttitor ligula viverra. Nam dictum egestas metus, at tincidunt arcu consequat non. Curabitur feugiat ipsum nisi, ut volutpat
        neque gravida et. Integer egestas ultrices lacus, ut tempor est lobortis ac. Nunc nisl risus, egestas non aliquet eu, ornare nec diam. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec hendrerit ipsum ut tellus fringilla, lacinia placerat turpis
        accumsan. Morbi enim orci, ultricies quis vestibulum ut, venenatis vitae nisi. Sed vulputate diam in dolor molestie, a commodo risus ullamcorper.
      </p>
    </div>
    <div id="otherPosts">
      <h3>Artículos relacionados</h3>
      <hr />
      <div id="relationPost">
        <img src="../assets/australia_pic.png" alt />
        <h4>Australia</h4>
      </div>
    </div>
    <div id="comments">
      Comentarios
      <hr />
      <div id="comment">
        <span id="dateComment">29/01/2020, 16:17</span>
        <h4>Cristobal Colón, dijo:</h4>
        <p>
          Mauris aliquam vitae lorem et interdum. Donec non tortor quis lectus euismod suscipit. Duis fringilla diam id dui facilisis, sit amet commodo enim
          tincidunt. Pellentesque sit amet bibendum lacus, a posuere purus. Ut semper efficitur enim non ultricies. Morbi ultrices, arcu sed aliquam aliquet,
          massa lorem finibus diam.
        </p>
        <hr />
      </div>
      <div id="newComment">
        <h4>Publicar un comentario:</h4>
        <textarea name="comment" id cols="30" rows="10"></textarea>
        <button>Publicar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  mounted(){
    this.id_from_url = this.$route.params.id;
  },
  data() {
    return {

    };
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

div#container img{
    max-width: 100%;
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