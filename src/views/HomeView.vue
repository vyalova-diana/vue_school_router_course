<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <TheAppLink
          v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'destination.show',params: {id: destination.id, slug: destination.slug}}">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </TheAppLink>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  data() {
    return {
      destinations :sourceData.destinations
    }
  }
};
</script>
<style scoped>

</style>