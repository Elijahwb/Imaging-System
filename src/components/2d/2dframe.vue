<template>
  <section class="app-container">
    <Topbar />
    <MainNav />
    <section class="sections">
      <Sidecontent>
        <SideBar />
      </Sidecontent>
      <Contentsection>
        <ContentBody />
      </Contentsection>
    </section>
  </section>
</template>

<script lang='ts'>
import Topbar from "../global/Topbar2.vue";
import Sidecontent from "../global/SideContent.vue";
import Contentsection from "../global/ContentContainer.vue";
import SideBar from "./2dSideBar.vue";
import ContentBody from "./2dContent.vue";
import MainNav from "@/components/global/MainNav.vue"

export default {
  components: {
    Topbar,
    Sidecontent,
    Contentsection,
    SideBar,
    ContentBody,
    MainNav,
  },
};
</script>

<style scoped>
.sections {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: calc(100% - 80px);
    margin-left: 80px;
    height: calc(100vh - var(--topBarHeight) - 14px - 60px - 10px);
}
/* .sections {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 80px);
  margin-left: 80px;
  margin-top: 10px;
  height: calc(100vh - var(--topBarHeight) - 50px);
} */
.app-container {
  /* font-family: "Mohave"; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0 10px;
}
</style>