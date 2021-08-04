<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="capstone-show">
      <h2> {{ capstone.name}} </h2>
      <p> Student: </p>
      <p> Description: {{ capstone.description }}</p>
      <p> URL: {{ capstone.url }} </p>
      <p> Sreenshot: {{ capstone.screenshot}} </p>
       <router-link v-bind:to="`/capstones/${capstone.id}/edit`">Edit Capstone</router-link>
      <hr> 
    </div>
  </div>
</template>




<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "See your capstone information!",
      capstone: {
        name: "BladeSpot",
        description: "App where you can upload skate spots in your city ",
        url: "google.com",
        screenshot: "google.com",
      },
    };
  },
  created: function () {
    this.capstoneShow();
  },
  methods: {
    capstoneShow: function () {
      console.log("Showing the capstone...");
      // axios.get("/capstones" + this.$route.params.id).then((response) => {
      //   console.log("capstone show!", response.data);
      //   this.capstone = response.data;
      // });
    },
  },
};
</script>
