<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1>
    
    <p> Name: <input type="text" v-model="capstone.name" /></p>
    <p> Description: <input type="text" v-model="capstone.description" /></p>
    <p> URL: <input type="text" v-model="capstone.url" /></p>
    <p> Screenshot: <input type="text" v-model="capstone.screenshot" /></p>
    <p> <button v-on:click="updateCapstone(capstone)"> Update </button> </p> -->
    <br>
    <br>
    <br>
    <br>
    <div class="container">
      <div class="card text-center">
        <div class="card-header">
          Edit Capstone
        </div>
        <div class="card-body">
          <p> Name: <input type="text" v-model="capstone.name" /></p>
          <p> Description: <input type="text" v-model="capstone.description" /></p>
          <p> URL: <input type="text" v-model="capstone.url" /></p>
          <p> Screenshot: <input type="text" v-model="capstone.screenshot" /></p>
          <a href="#" class="btn btn-primary" v-on:click="updateCapstone(capstone)">Update</a>
        </div>
      </div>
    </div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>


</template>

<style></style>

<script>
  // import axios from "axios"
  export default {
    data: function () {
      return {
        message: "Edit Capstone",
        capstone: {
          name: "name",
          description: "Description",
          url: "url",
          screenshot: "screenshot"
        }
      };
    },
    created: function () {},
    methods: {
      updateCapstone: function(capstone) {
        console.log("updating...")
        // var editCapstoneParams = capstone;
        // axios.patch("localhost:3000/capstones" + editCapstoneParams.id).then((response) => {
        //   console.log(response.data);
        //   // this.$router.push("/capstones");
        // });
      },
    },
  };
</script>
