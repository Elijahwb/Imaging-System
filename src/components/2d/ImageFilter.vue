<template>
  <div class="image-filter-container">
    <div class="icon">
      <span style="color: #ff782e">
        <i class="fa fa-dropbox" aria-hidden="true"></i>
      </span>
    </div>
    <div class="d-flex justify-content-around list-items">
      <p
        class="item"
        :class="[
          active_item == 'all' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('all')"
      >
        All
      </p>
      <p
        class="item"
        :class="[
          active_item == 'pano' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('pano')"
      >
        Pano
      </p>
      <p class="item">Graph</p>
      <p
        class="item"
        :class="[
          active_item == 'sensor' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('sensor')"
      >
        IO Sensor
      </p>
      <p
        class="item"
        :class="[
          active_item == 'camera' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('camera')"
      >
        IO Camera
      </p>
      <p
        class="item"
        :class="[
          active_item == 'photo' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('photo')"
      >
        Photo
      </p>
      <p class="item">Capture</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_item: "pano",
      imageTypes: [
        { name: "All", enabled: true },
        { name: "Pano", enabled: true },
        { name: "Graph", enabled: false },
        { name: "IO Sensor", enabled: true },
        { name: "IO Camera", enabled: true },
        { name: "Photo", enabled: true },
        { name: "Capture", enabled: false },
      ],
    };
  },
  methods: {
    selected(type) {
      this.active_item = type;
    },
  },
};
</script>

<style scoped>
.list-items {
  border-radius: 30px;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.list-items :first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.list-items :last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.item {
  height: 30px;
  text-align: center;
  padding: 6px;
  color: var(--dsBrandColor);
  background-color: var(--appWhite);
  margin-right: 1px;
}
.option-selected {
  display: inherit;
  color: var(--appWhite);
  background-color: var(--dsBrandColor);
  /* border-radius: 1px; */
}

.option-unselected {
  display: inherit;
  color: var(--dsBrandColor);
  background-color: var(--appWhite);
  /* border-radius: 30px; */
}
.image-filter-container {
  display: flex;
}
.icon {
  margin-top: 10px;
  margin-right: 8px;
  padding: 5px 6px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: var(--appWhite);
  text-align: center;
}
</style>