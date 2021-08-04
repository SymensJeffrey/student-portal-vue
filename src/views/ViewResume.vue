<template>
  <div class="resumes-show">
    <h1>id: {{ resume.id }}</h1>
    <h1>title: {{ resume.title }}</h1>
    <h1>body: {{ resume.body }}</h1>
    <h1>image: {{ resume.image }}</h1>
    <h1>img_url: {{ resume.img_url }}</h1>
    <p>user_id: {{ $parent.getUserId() }}</p>
    <p>user_id: {{ resume.user_id }}</p>
    <p><img v-bind:src="resume.image"></p>
    <router-link v-if="resume.user_id == $parent.getUserId()" v-bind:to="`/resumes/${resume.id}/edit`">Edit</router-link>
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
      resume: {},
    };
  },
  created: function () {
    this.resumeShow();
  },
  methods: {
    resumeShow: function () {
      console.log("getting a single resume");
      console.log(this.$route);
      // get data from rails
      axios.get(`/resumes/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.resume = response.data;
      });
    },
    resumeDelete: function () {
      console.log("destroying resume");
      axios.delete("/resumes/${this.$route.params.id}").then((response) => {
        console.log(response.data);
        this.$router.push;
      });
    },
    getUserId: function () {
      console.log("getting user_id");
      console.log(this.$route);
      axios.get(`/resumes/${this.$route.params.id}`).then((response) => {
        console.log("resonse.data");
        this.resume = response.data;
      });
    },
  },
};
</script>