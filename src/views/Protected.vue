<template>
  <div>
    <h1>Greetings, {{username}}</h1>
    <router-link :to="{name:'invoices'}">
      <button class="btn">Invoices</button>
    </router-link>
    <button class="btn" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.user
    }
  },
  methods: {
    logout(){
      window.user =null
      this.$router.push({name: 'home'})
    }
  }
};
</script>

<style scoped>

</style>