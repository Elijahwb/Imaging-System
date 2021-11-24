<template>
  <!-- <transition name="router-anim" enter-active-class="animate__animated animate__slideInLeft" leave-active-class="animate__animated animate__slideInLeft">
    <router-view />
  </transition> -->
  
  <router-view />
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
})
</script>

<style>
/* @font-face {
  font-family: "Mohave";
  src: local("Mohave"),
   url(./fonts/Mohave/static/Mohave-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Mohavebold";
  src: local("Mohave"),
   url(./fonts/Mohave/static/Mohave-Bold.ttf) format("truetype");
} */
</style>
