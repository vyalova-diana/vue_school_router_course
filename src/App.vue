<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {TheNavigation}
}
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <router-view :key="$route.path"/>
  </div>
</template>

<style scoped>

</style>
