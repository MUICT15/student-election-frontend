<template>
  <div class="container">
    <div v-for="(data , index) of listElection" v-bind:key="index">
      <ElectionCardComponent :partyID="data._id" partyName="awda" />
    </div>

  </div>
</template>
<script>
  import feather from '../feathers'
  import ElectionCardComponent from '../components/card'
  export default {
    components: {
      ElectionCardComponent
    },
    data: function () {
      return {
        listElection: []
      }
    },
    created: function () {
      feather.authenticate()
        .then((data) => {
          feather.service('select-party')
            .find({})
            .then((data) => {
              this.listElection = data.data
            })
        })
        .catch((err) => {
          this.$router.push('/')
        })
    }
  }

</script>
<style>
  .container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

</style>
