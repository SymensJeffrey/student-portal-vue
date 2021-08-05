<template>
  <div class="resumes-show" style="width 12rem">
    <div class="card text-center bg-primary">
      <h1 class="card-header">{{ message }}</h1>
      <h2 class="card-title">Student:</h2>
      <h4 class="card-text">First Name: {{ student.first_name }}</h4>
      <h4 class="card-text">Last Name: {{ student.last_name }}</h4>
      <h4 class="card-text">Email: {{ student.email }}</h4>
      <h4 class="card-text">Phone Number: {{ student.phone_number }}</h4>
      <h4 class="card-text">Short Bio: {{ student.short_bio }}</h4>
      <h4 class="card-text">Twitter Handle: {{ student.twitter_handle }}</h4>
      <h4 class="card-text">Personal Blog/Website URL: {{ student.website_url }}</h4>
      <h4 class="card-text">Online Resume URL: {{ student.online_url }}</h4>
      <h4 class="card-text">Github URL: {{ student.github_url }}</h4>
      <h4 class="card-text" >Photo: {{ student.photo }}</h4>
    </div>
    <div class ="card text-center">
      <h2 class="card title">Experience:</h2>
      <h4 class="card-text">Start Date: {{ experience.start_date }} </h4>
      <h4 class="card-text"End Date: {{ experience.end_date }} </h4>
      <h4 class="card-text">Job Title: {{ experience.job_title }} </h4>
      <h4 class="card-text">company_name: {{ experience.company_name }} </h4>
      <h4 class="card-text">Details: {{ experience.details}} </h4>
    </div>
    <div class="card text-center">
      <h2 class="card-title">Skills:</h2>
      <h4 class="card-text">Skill: {{ skills.name }} </h4>
    </div>
    <div class="card text-center">
      <h2 class="card-title">Education:</h2>
      <h4 class="card-text">Start Date: {{ education.start_date }}</h4>
      <h4 class="card-text">End Date: {{ education.end_date }}</h4>
      <h4 class="card-text">Degree: {{ education.degree }}</h4>
      <h4 class="card-text">University Name: {{ education.university_name }}</h4>
      <h4 class="card-text">Details: {{ education.details }}</h4>
    </div>
      <p align="center">Student_id: {{ student.student_id }}</p>
      <router-link v-bind:to="`/educations`">Edit Education</router-link> | 
      <router-link v-bind:to="`/experiences`">Edit Experiences</router-link> |
      <router-link v-bind:to="`/skills`">Edit Skills</router-link> |  
      <router-link v-bind:to="`/student`"> Edit Student Info</router-link>
    </div>
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
      student: {
        first_name: "this is a first name",
        last_name: "this is a last name",
        email: "this is an email",
        phone_number: "this is a phone number",
        short_bio: "this a short bio",
        twitter_handle: "this is a twitter handle",
        website_url: "this is a website url",
        online_url: "this is a online url",
        github_url: "this is a github url",
        photo: "this is a photo",
        student_id: "this is a student id",
      },
      experience: {
        start_date: "this is a start date",
        end_date: "this is an end date",
        job_title: "this is a job title",
        company_name: "this is a company name",
        details: "these are details",
      },
      education: {
        start_date: "this is a start date",
        end_date: "this is a end date",
        degree: "this is a degree",
        university_name: "this is a university name",
        details: "these are details",
      },
      skills: {
        name: "these are skills",
      },
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