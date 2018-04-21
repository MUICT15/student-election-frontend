<template>
<div class="container">
  <div class="form-login">
    <h2>MUICT election</h2>
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
</div>
</template>
<script>
  import client from '../feathers'
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        client.authenticate({
          strategy: 'local',
          email: this.username,
          password: this.password
        }).then((data) => {
          this.$router.push('/election');
        })
      }
    }
  }

</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
}
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
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
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
    width: 30vw;
  }

  .form-login:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, .4);
    transition: .8s ease;
  }

  .topic {
    font-weight: bold;
  }

</style>
