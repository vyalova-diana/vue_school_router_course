<template>
  <div>
    <section class="destination">
      <h1>{{destination.name}}</h1>
      <TheGoBack/>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{destination.name}}</h2>
      <div class="cards">
        <TheAppLink v-for="experience in destination.experiences" :key="experience.slug" :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}">
          <TheExperienceCard  :experience="experience"/>
        </TheAppLink>
      </div>
      <router-view/>
    </section>
  </div>

</template>

<script>
import sourceData from '@/data.json'
import TheExperienceCard from "@/components/TheExperienceCard.vue";
import TheGoBack from "@/components/TheGoBack.vue";
export default {
  components: {TheExperienceCard, TheGoBack},
  props: {
    id: {type:Number,required:true}
  },
  computed: {
    // destinationId() {
    //   return parseInt(this.$route.params.id) ;
    // },
    destination() {
      return sourceData.destinations.find(destination => destination.id === this.id )
    }
  }
}
</script>

<style scoped>

</style>