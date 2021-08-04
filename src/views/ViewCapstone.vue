<template>
  <div class="capstones-show">
    <h1>id: {{ capstone.id }}</h1>
    <h1>title: {{ capstone.title }}</h1>
    <h1>body: {{ capstone.body }}</h1>
    <h1>image: {{ capstone.image }}</h1>
    <h1>img_url: {{ capstone.img_url }}</h1>
    <p>user_id: {{ $parent.getUserId() }}</p>
    <p>user_id: {{ capstone.user_id }}</p>
    <p><img v-bind:src="capstone.image"></p>
    <router-link v-if="capstone.user_id == $parent.getUserId()" v-bind:to="`/capstones/${capstone.id}/edit`">Edit</router-link>
  </div>
</template>

<style>
img {
  width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the show!",
      capstone: {},
    };
  },
  created: function () {
    this.capstoneShow();
  },
  methods: {
    capstoneShow: function () {
      console.log("getting a single capstone");
      console.log(this.$route);
      // get data from rails
      axios.get(`/capstones/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.capstone = response.data;
      });
    },
    capstoneDelete: function () {
      console.log("destroying capstone");
      axios.delete("/capstones/${this.$route.params.id}").then((response) => {
        console.log(response.data);
        this.$router.push;
      });
    },
    getUserId: function () {
      console.log("getting user_id");
      console.log(this.$route);
      axios.get(`/capstones/${this.$route.params.id}`).then((response) => {
        console.log("resonse.data");
        this.capstone = response.data;
      });
    },
  },
};
</script>