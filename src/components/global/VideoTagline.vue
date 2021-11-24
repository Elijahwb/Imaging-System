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
  height: 13vw;
  margin-right: 10px;
  flex-basis: 13vw;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
}
.images-row::-webkit-scrollbar {
  width: 2px;
  height: 8px;
  scrollbar-color: var(--dsBrandColor) var(--dsBrandColor);
}
.images-row::-webkit-scrollbar-track {
  background: transparent;
}
.images-row::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid var(--dsBrandColor);
}
.images-row {
  display: flex;
  overflow-x: auto;
  /* border: 1px solid var(--dsBrandColor); */
  width: 100%;
}
.date-heading {
  background: #131313;
  padding: 5px 10px;
}
.image-number {
  margin-left: 2px;
  padding: 1px 4px;
  /* background-color: rgb(143, 140, 140); */
}
.image-footer {
  background-color: var(--dsBrandColor);
  padding-left: 2px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
</style>