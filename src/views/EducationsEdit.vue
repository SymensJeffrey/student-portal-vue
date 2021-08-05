<template>
  <div class="education-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Education</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Start Date:</label>
        <input type="text" v-model="editEducationParams.start_date" />
      </div>
      <div>
        <label>End Date:</label>
        <input type="text" v-model="editEducationParams.end_date" />
      </div>
      <div>
        <label>Degree:</label>
        <input type="text" v-model="editEducationParams.degree" />
      </div>
      <div>
        <label>University Name:</label>
        <input type="text" v-model="editEducationParams.university_name" />
      </div>
      <div>
        <label>Details:</label>
        <input type="text" v-model="editEducationParams.details" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editEducationParams: {
        start_date: "start",
        end_date: "end",
        degree: "degree",
        university_name: "university",
        details: "details"
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch(`/educations/${this.$route.params.id}`, this.editEducationParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/educations/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getEducation: function() {
      console.log('getting education')
      axios.get(`/educations/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.editEducationParams = response.data;
      })
    },
    
  },
  created: function() {
    console.log('in created...')
    this.getEducation();
  }
};
</script>