<template>
  <!-- <div class="experience-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Experience</h1>
      <!-- <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Start Date:</label>
        <input type="text" v-model="editExperienceParams.start_date" />
      </div>
      <div>
        <label>End Date:</label>
        <input type="text" v-model="editExperienceParams.end_date" />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" v-model="editExperienceParams.job_title" />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" v-model="editExperienceParams.company_name" />
      </div>
      <div>
        <label>Details:</label>
        <input type="text" v-model="editExperienceParams.details" />
      </div>
      <input type="submit" value="Submit" /> -->
    <!-- </form>
  </div> -->

  <div class="card text-center">
  <div class="card-header">
    <h1>Experiences</h1>
  </div>
  <div class="card-body">
    <form v-on:submit.prevent="submit()">
    <h5 class="card-title">Edit Your Information</h5>
    <p class="card-text"><ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Start Date:</label>
        <input type="text" v-model="editExperienceParams.start_date" />
      </div>
      <div>
        <label>End Date:</label>
        <input type="text" v-model="editExperienceParams.end_date" />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" v-model="editExperienceParams.job_title" />
      </div>
      <div>
        <label>Company Name:</label>
        <input type="text" v-model="editExperienceParams.company_name" />
      </div>
      <div>
        <label>Details:</label>
        <input type="text" v-model="editExperienceParams.details" />
      </div></p>
    <input type="submit" value="Submit" />
    </form>
  </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editExperienceParams: {
        start_date: "start",
        end_date: "end",
        job_title: "job title",
        company_name: "company",
        details: "details"
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch(`/experiences/${this.$route.params.id}`, this.editExperienceParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/experiences/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getExperience: function() {
      console.log('getting resume')
      axios.get(`/experiences/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.editExperienceParams = response.data;
      })
    },
    
  },
  created: function() {
    console.log('in created...')
    this.getExperience();
  }
};
</script>