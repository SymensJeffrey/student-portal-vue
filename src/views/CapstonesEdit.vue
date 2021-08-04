<template>
  <div class="home">
    <h1>{{ message }}</h1>
    
    <p> Name: <input type="text" /></p>
    <p> Description: <input type="text" /></p>
    <p> URL: <input type="text" /></p>
    <p> Screenshot: <input type="file" /></p>
    <p> <button v-on:click="updateCapstone(capstone)"> Update </button> </p>
  </div>

</template>

<style></style>

<script>
  // import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Edit Capstone",
        capstone: {}
      };
    },
    created: function () {},
    methods: {
      updateCapstone: function(capstone) {
        console.log("updating...")
        var editCapstoneParams = capstone;
        axios.patch("/capstones" + editCapstoneParams.id).then((response) => {
          console.log("Capstone Update", response);
          // this.$router.push("/capstones");
        });
      },
    },
  };
</script>
