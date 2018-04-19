<template>
  <div id="app">
    <NavbarComponent/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from './components/navbar'
  export default {
    components: {
      NavbarComponent
    },
    name: 'app'
  }
</script>
<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  img{
    height: 200px;
    width: auto;
  }

  .container{
    display: flex;
    justify-content: center;
  }
</style>