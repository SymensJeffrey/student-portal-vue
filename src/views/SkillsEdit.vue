<template>
  <div class="skills-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Skills</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Skill Name:</label>
        <input type="text" v-model="editSkillParams.skill_name" />
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
      editSkillParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch(`/skills/${this.$route.params.id}`, this.editSkillParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/skills/" + this.$route.params.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getSkill: function() {
      console.log('getting skills')
      axios.get(`/skills/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.editSkillParams = response.data;
      })
    },
    
  },
  created: function() {
    console.log('in created...')
    this.getSkill();
  }
};
</script>