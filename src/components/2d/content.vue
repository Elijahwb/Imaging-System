<template>
  <div class="row">
    <!-- <div class="col-12 editing-container"> -->
    <div class="col-12 editing-container">
      <div class="row">
        <div class="col-6 current-image align-items-center">
          <img
            src="@/assets/xrays/3.jpeg"
            alt="image"
            width="100%"
            height="100%"
            class="image-container"
          />
          <div class="d-flex justify-content-between">
            <ImageFilter />
            <TimestampFilter />
          </div>
        </div>
        <div class="col-6 current-image align-items-center">
          <img
            src="@/assets/xrays/2.jpeg"
            alt="image"
            width="100%"
            height="100%"
            class="image-container"
          />
          <Slider />
        </div>
      </div>
    </div>

    <div class="col-6 image-list">
      <CroppedImages :images="cropped" />
    </div>
    <div class="col-6 image-list">
      <CroppedImages :images="paranomas" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import CroppedImages from "../global/CroppedImages.vue";
import ImageFilter from "./ImageFilter.vue";
import TimestampFilter from "./TimestampFilter.vue";
import Slider from "../global/RangeSlider.vue";
import Component from "vue-class-component";

@Component({
  name: "2dContentBody",
  components: {
    CroppedImages,
    ImageFilter,
    TimestampFilter,
    Slider,
  },
})
export default class ContentBody2d extends Vue {
  cropped = ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"];
  paranomas = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
}
</script>

<style scoped>
.editing-container {
  height: calc(100vh - var(--topBarHeight) - 400px);
  width: calc(100vw - 330px);
  border: solid 1px;
  margin-bottom: 8px;
}
.image-list {
  height: 300px;
  border: solid 1px;
}
.current-image {
  height: 50vh;
  text-align: center;
}
</style>