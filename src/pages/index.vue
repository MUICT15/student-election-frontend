<template>
  <div class="form-login">
    <!-- <h2><img src="https://upload.wikimedia.org/wikipedia/th/a/a0/Logo-ICT.png"> </h2> -->
    <input type="text" placeholder="username" v-model="username" />
    <br>
    <input type="password" placeholder="password" v-model="password" />
    <br>
    <br>
    <button type="button" @click="login()">
      login
    </button>
  </div>
</template>
<script>
  import {
    client
  } from '../feathers'
  import NavbarComponent from '../components/navbar'
  export default {
    components: {
      NavbarComponent
    },
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        console.log(this.username)
        console.log(this.password)
        client.authenticate({
          strategy: 'local',
          email: this.username,
          password: this.password
        }).then((data) => {
          console.log(data)
        })
      }
    }
  }

</script>
<style scoped>
  h2 {
    text-align: center;
  }

  ::placeholder {
    color: white;
    font-size: 15px;
  }

  button {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    background-color: #44B9B9;
    border-style: none;
    color: white;
    font-size: 20px;
  }

  input {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: #004E4F;
    border-style: none;
    border-bottom: #fff;
    border-style: solid;
    border-width: 0 0 0.1em;
    outline: none;
    color: white;
    font-size: 20px;
    font-weight: 300;
  }

  .form-login {
    margin-top: 80px;
    background-color: #004E4F;
    color: white;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    transition: .8s ease;
  }

  .form-login:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .4);
    transition: .8s ease;
  }

  .topic {
    font-weight: bold;
  }

</style>
