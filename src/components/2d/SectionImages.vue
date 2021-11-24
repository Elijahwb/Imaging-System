<template>
  <div class="studytemplate-container">
    <div class="container-heading">
      <div>Panaroma 21.11.05</div>
      <div class="action-icons">
        <span><i class="fa fa-camera"></i></span>
        <span><i class="fa fa-crop"></i></span>
      </div>
    </div>
    <div class="images-container">
      <img src="@/assets/xrays/5.jpeg" alt="" class="image-container" />
    </div>
    <div class="image-list">
      <div class="menu-bar">
        <ImageFilter />
        <TimestampFilter />
      </div>
      <CroppedImages :showHeader="true" :images="cropped" />
    </div>
  </div>
</template>

<script lang='ts'>
import CroppedImages from "../global/CroppedImages.vue";
import ImageFilter from "./ImageFilter.vue";
import TimestampFilter from "./TimestampFilter.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "SectionImages",
  components: {
    CroppedImages,
    ImageFilter,
    TimestampFilter,
  },
})
export default class SectionImages extends Vue {
  // class fields change to data properties
  cropped: Array<string> = ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"];
  paranomas: Array<string> = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
  name = "Muhammed Kasujja";

  // for [methods properties]
  fullname(): string {
    return this.name;
  }
  // for [computed properties] prefix with a getter
  get shortName(): string {
    return this.name.slice(0, 4);
  }
  set shortName(name: string) {
    this.name = name;
  }
  /////////////////////
}
// export default Vue.extend({
//   name: "SectionImages",
//   components: {
//     CroppedImages,
//     ImageFilter,
//     TimestampFilter,
//   },
//   data(): { cropped: Array<string>; paranomas: Array<string> } {
//     return {
//       cropped: ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"],
//       paranomas: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
//     };
//   },
// });
</script>

<style scoped>
.image-container {
  position: relative !important;
  height: 100%;
  width: 100%;
  /* margin-left: 5px; */
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
  /* padding-right: 5px; */
}
.container-heading span:hover {
  cursor: pointer;
  color: var(--highlight);
}
.container-heading {
  font-size: 15px;
  padding: 10px;
  display: flex;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  justify-content: space-between;
  background-color: var(--dsBrandColor);
  color: var(--appWhite);
}
.studytemplate-container.zoomed-in {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */
  z-index: 10;
  /* height: 100% !important; */
  /* flex-basis: 100% !important; */
}
.studytemplate-container {
  transition: all 400ms ease-in-out;
  transform-origin: center;
  height: 100%;
  /* border-right:.5px solid var(--appWhite); */
  border-bottom: 0.5px solid #dfdede42;
  /* flex-basis: calc(50% - 5px); */
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
}
.action-icons {
  display: flex;
  gap: 10px;
}
</style>