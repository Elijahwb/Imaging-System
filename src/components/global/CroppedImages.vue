<template>
  <div class="images-row">
    <div
      class="image"
      v-for="(img, index) in images"
      :key="index"
      @click="onSelect(index)"
    >
      <div class="image-number">{{ index + 1 }}/{{ images.length }}</div>
      <div class="image-source">
        <img :src="require('@/assets/xrays/' + img)" alt="img" />
      </div>
      <div
        class="image-footer"
        :class="[isActive == index ? 'option-selected' : 'option-unselected']"
      >
        21.11.05
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({
  props: {
    images: Array,
    showHeader: { type: Boolean, default: false },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    onSelect(index: number) {
      this.isActive = index;
    },
  },
});
</script>

<style scoped>
.image-source img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image .image-source {
  height: calc(100% - 70px);
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
  border: 0.5px solid var(--dsBrandColor);
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

.option-selected {
  display: inherit;
  color: var(--appWhite);
  background-color: var(--dsBrandColor);
  border-radius: 1px;
}

.option-unselected {
  display: inherit;
  color: var(--dsBrandColor);
  background-color: var(--appWhite);
  border-radius: 1px;
}
</style>