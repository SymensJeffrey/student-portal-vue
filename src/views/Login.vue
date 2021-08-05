<template>
  <div class="login">
    <!-- <form v-on:submit.prevent="test()">
      <h1>Login</h1>
      <ul> -->
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1> -->
      <!-- <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="newSessionParams.password" />
      </div> -->

      <div class="card">
        <div class="card-body">
          <form v-on:submit.prevent="test()">
            <h1>Login</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="newSessionParams.email">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" v-model="newSessionParams.password">
            </div>
          
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>  
    <!-- </form> -->

  </div>
  

  
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/capstones/1");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
    test: function () {
      console.log("Logging in as Student");
      this.$router.push("/viewresume");
    },
  },
};
</script>

<style>
</style>