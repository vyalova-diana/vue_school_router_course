<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {TheNavigation}
}
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <div :key="$route.path">
          <component :is="Component" ></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style >
.fade-enter-active,
.fade-leave-active
{
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to
{
  opacity: 0;
}
</style>
