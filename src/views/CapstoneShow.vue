<template>
  <div class="home">
    
    
    <div class="capstone-show">

    <div class="card text-center">
      <div class="card-header">
        Capstone  
      </div>
    <div class="card-body">
    <h5 class="card-title">  </h5>
    <p class="card-text"> Description: {{ capstone.description }}</p>
    <p class="card-text"> URL: {{ capstone.url }}</p>
    <p class="card-text"> Screenshot: {{ capstone.screenshot }} </p>
    <router-link v-bind:to="`/capstones/${capstone.id}/edit`">
    <a href="#" class="btn btn-primary"> Edit Capstone</a>
    </router-link>
   
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

      
     
     
      
       
      <hr> 
    </div>
  </div>
</template>




<style>
</style>

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
