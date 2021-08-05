<template>
  <div class="resumes-show">
    <h1>{{ message }}</h1>
    <h2>Student:</h2>
    <h4>First Name: {{ student.first_name }}</h4>
    <h4>Last Name: {{ student.last_name }}</h4>
    <h4>Email: {{ student.email }}</h4>
    <h4>Phone Number: {{ student.phone_number }}</h4>
    <h4>Short Bio: {{ student.short_bio }}</h4>
    <h4>Twitter Handle: {{ student.twitter_handle }}</h4>
    <h4>Personal Blog/Website URL: {{ student.website_url }}</h4>
    <h4>Online Resume URL: {{ student.online_url }}</h4>
    <h4>Github URL: {{ student.github_url }}</h4>
    <h4>Photo: {{ student.photo }}</h4>
    <h2>Experience:</h2>
    <h4>Start Date: {{ experience.start_date }} </h4>
    <h4>End Date: {{ experience.end_date }} </h4>
    <h4>Job Title: {{ experience.job_title }} </h4>
    <h4>company_name: {{ experience.company_name }} </h4>
    <h4>Details: {{ experience.details}} </h4>
    <h2>Skills:</h2>
    <h4>Skill: {{ skills.name }} </h4>
    <h2>Education:</h2>
    <h4>Start Date: {{ education.start_date }}</h4>
    <h4>End Date: {{ education.end_date }}</h4>
    <h4>Degree: {{ education.degree }}</h4>
    <h4>University Name: {{ education.university_name }}</h4>
    <h4>Details: {{ education.details }}</h4>
    <p>Student_id: {{ student.student_id }}</p>
    <router-link v-bind:to="`/educations/${student.id}/edit`">Edit Education</router-link> | 
    <router-link v-bind:to="`/experiences/${student.id}/edit`">Edit Experiences</router-link> |
    <router-link v-bind:to="`/skills/${student.id}/edit`">Edit Skills</router-link> |
    <router-link v-bind:to="`/student`"> Edit Student Info</router-link>
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
      message: "Here is your Resume",
      student: {},
      experience: {},
      education: {},
      skills: {},
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
      // axios.get(`/resumes/${this.$route.params.id}`).then((response) => {
      //   console.log(response.data);
      //   this.resume = response.data;
      // });
    },
  },
};
</script>