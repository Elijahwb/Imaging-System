<template>
  <div class="main-container">
    <FloatingEditingMenu />
    <div class="row">
      <!-- <div class="col-12 editing-container"> -->
      <div class="col-12 editing-container" style="background-image">
        <img
          src="@/assets/xrays/7.jpeg"
          alt="image"
          width="100%"
          height="100%"
          class="image-container"
        />
      </div>
      <div class="col-12 image-list">
        <LiveImages :images="cropped" />
      </div>
    </div>
  </div>
</template>

<script>
import FloatingEditingMenu from "../menu/FloatingEditingMenu.vue";
import LiveImages from "./3dLiveImages.vue";
export default {
  name: "3dContentBody",
  components: {
    FloatingEditingMenu,
    LiveImages,
  },
  data() {
    return {
      edit_image: "/assets/xrays/4.jpeg",
      cropped: ["5.jpeg", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"],
    };
  },
};
</script>

<style scoped>
.editing-container {
  /* height: calc(100vh - var(--topBarHeight) - 500px); */
  /* height: 70vh; */
  height: calc(70vh - 50px);
  width: calc(100vw - 330px);
  border: solid 1px;
  margin-bottom: 8px;
  text-align: center;
}
.main-container {
  position: relative;
  z-index: 300;
}

.image-list {
  height: 18vw;
  border: solid 1px;
}
</style>