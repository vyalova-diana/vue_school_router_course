<template>
  <section>
    <h1>{{experience.name}}</h1>
    <div class="experience-details">
      <img :src="`/images/${experience.image}`" :alt="experience.name">
      <p>{{experience.description}}</p>
    </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'
export default {
  props: {
    id: {type:Number,required: true}, //destination.id
    experienceSlug: {type: String, required: true}
  },
  computed: {
      destination(){
        return sourceData.destinations.find (
            destination => destination.id === this.id
        )
      },
    experience(){
        return this.destination.experiences.find(
            experience => experience.slug === this.experienceSlug
        )
    }
  }
};
</script>

<style scoped>

</style>