<template>
  <!-- <div class="layout-template-container">
    <SectionImages />
    <SectionVideos />
  </div> -->
  <div class="row layout-template-container">
    <div class="col-12">
      <Editor2d />
    </div>
    <!-- <div class="col-6">
      <section-images />
    </div>
    <div class="col-6">
      <section-videos />
    </div> -->
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import SectionImages from "./SectionImages.vue";
import SectionVideos from "./SectionVideos.vue";
import Editor2d from "./2dEditor.vue";
import Component from "vue-class-component";
import Editor from "./Editor.vue";

@Component({
  name: "ContentBody2D",
  components: {
    SectionImages,
    SectionVideos,
    Editor2d,
    Editor,
  },
})
export default class ContentBody2D extends Vue {}
</script>

<style scoped>
.layout-template-container {
  /* position: relative; */
  height: 100%;
  /* overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  row-gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap; */
  /* background: var(--mainBg); */
}
</style>