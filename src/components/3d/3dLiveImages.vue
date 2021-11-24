<template>
  <section>
    <div class="images-row">
      <div class="image" v-for="(img, index) in images" :key="index">
        <div class="image-source">
          <img :src="require('@/assets/xrays/' + img)" alt="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    images: Array,
  },
};
</script>

<style scoped>
.image-source img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image .image-source {
  height: calc(100% - 40px);
  margin-bottom: 10px;
  background: var(--mainBg);
}
.image-type {
  background: #131313;
  padding: 5px 10px;
}
.image {
  height: 18vw;
  margin-right: 0px;
  flex-basis: 18vw;
  flex-grow: 0;
  flex-shrink: 0;
}
/* .images-row::-webkit-scrollbar {
    width: 2px;
    height: 8px;
    scrollbar-color: var(--highlight) var(--highlight);
}
.images-row::-webkit-scrollbar-track {
    background: transparent;
}
.images-row::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 2px;
    border: 1px solid var(--highlight);
} */
.images-row {
  display: flex;
  overflow-x: auto;
  border: 1px solid cadetblue;
  width: 100%;
}
.date-heading {
  background: #131313;
  padding: 5px 10px;
}
</style>