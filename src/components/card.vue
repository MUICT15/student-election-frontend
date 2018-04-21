<template>
  <div class="card">
    <h3>{{partyName}}</h3>
    <p>{{qoute}}</p>
    <br>
    <button type="button" @click="submit()">submit</button>
    <br>
    <br>
  </div>
</template>
<script>
  import feather from '../feathers'
  export default {
    props: ['partyID', 'partyName', 'qoute'],
    methods: {
      submit: function () {
          feather.authenticate().then((data) => {
            feather.service().patch(this.partyID).then((data) => {
              console.log(data)
            }).catch((err) => {
              console.log(err)
            })
          })
      }
    }
  }

</script>
<style>
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

  .card {
    width: 25vw;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 10px;
    background-color: #004E4F;
    box-shadow: 0 12px 20px rgba(0, 0, 0, .1);
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
  }

  .card h3 {
    color: white;
    padding-bottom: 20px;
    text-align: center
  }

  @media screen and (max-width: 700px) {
    .card {
      width: 80vw;
    }
  }

</style>
