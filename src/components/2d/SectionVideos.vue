<template>
  <div class="studytemplate-container">
    <div class="container-heading">Video</div>
    <div class="images-container">
      <VideoPLayer />
    </div>
    <div class="image-list">
      <div class="menu-bar">
        <div class="col"><Slider :value="40" /></div>
      </div>
      <VideoTagline :images="paranomas" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import Slider from "../global/Ranger.vue";
import VideoPLayer from "../global/CustomVideoPlayer.vue";
import VideoTagline from "../global/VideoTagline.vue";

@Component({
  name: "SectionVideos",
  components: {
    Slider,
    VideoPLayer,
    VideoTagline,
  },
})
export default class SectionVideos extends Vue {
  cropped = ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"];
  paranomas = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
}
</script>

<style scoped>
.image-container {
  position: relative !important;
  height: 100%;
  width: 100%;
  margin-left: 5px;
  /* flex-basis: calc(32.5% - 0px); */
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 0;
  object-fit: cover;
}
.images-container {
  width: 100%;
  height: calc(70% - 44px);
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  /* flex-wrap: wrap; */
  overflow-x: hidden;
  overflow-y: auto;
  row-gap: 15px;
  padding-right: 5px;
}
.container-heading span:hover {
  cursor: pointer;
  color: var(--highlight);
}
.container-heading {
  font-size: 15px;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
}
.studytemplate-container.zoomed-in {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  /* height: 100% !important; */
  flex-basis: 100% !important;
}
.studytemplate-container {
  transition: all 400ms ease-in-out;
  transform-origin: center;
  height: 100%;
  border-bottom: 0.5px solid #dfdede42;
  flex-basis: calc(50% - 5px);
  flex-shrink: 0;
  flex-grow: 0;
  background: #000000;
}
.image-list {
  width: 100%;
  height: calc(30%);
  display: flex;
  flex-flow: column;
}
.menu-bar {
  display: flex;
  justify-content: space-between;
  margin: 0 8px 6px 8px;
  height: 50px;
  padding: 5px;
}
</style>