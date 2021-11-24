<template>
  <section class="app-container">
    <Topbar />
    <section class="sections">
      <Sidecontent>
        <SideBar3d />
      </Sidecontent>
      <Contentsection>
        <div class="container">
          <ContentBody />
        </div>
      </Contentsection>
    </section>
  </section>
</template>

<script>
import Topbar from "../global/Topbar.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";
import SideBar3d from "./3dSidebar.vue";
import ContentBody from "./3dContent2.vue";

export default {
  components: {
    Topbar,
    Sidecontent,
    Contentsection,
    SideBar3d,
    ContentBody,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sections {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: calc(100% - 80px);
  margin-left: 80px;
  height: calc(100vh - var(--topBarHeight) - 10px);
}
.app-container {
  /* font-family: "Mohave"; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0 10px;
}
</style>