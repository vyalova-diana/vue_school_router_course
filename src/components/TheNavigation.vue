<template>
  <div id="nav">
    <TheAppLink id="logo" to="/">Vue School Travel App</TheAppLink>
    <TheAppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show',params: {id: destination.id, slug: destination.slug}}">
      {{destination.name}}
    </TheAppLink>
    <TheAppLink :to="{name:'protected'}">Dashboard</TheAppLink>
    <TheAppLink to="https://vueschool.io">Vue School</TheAppLink>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default  {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<style scoped>

</style>