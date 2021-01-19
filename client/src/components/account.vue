<template>
  <div class="container">
    <h1>Username:</h1>
    <!-- Input data here -->
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="summat">
      <div class="users" v-for="(User, index) in users" v-bind:item="User" v-bind:key="index">
        <p class="text">{{User.guild_owner}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import accountService from '../account';
export default {
  name: 'account',
  data() {
    return {
      users: [],
      error: "",
      text: "",
    }
  },
  async created() {
    try {
      this.users = await accountService.getUser();
    }catch(err){
      this.error = err.message;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
