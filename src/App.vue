<template>
<div class="container">  
   <nav class="navbar navbar-dark bg-light mb-5"> 
     <span class="navbar-brand mb-0 h1"><router-link to="/">Lista de provincias</router-link> </span>      
  </nav>
  <router-view/>
  </div>
</template>
  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}




</style>
