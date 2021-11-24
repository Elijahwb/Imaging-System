<template>
  <div class="date-filter-container">
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
          active_item == 'today' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('today')"
      >
        Today
      </p>
      <p
        class="item"
        :class="[
          active_item == 'one_week' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('one_week')"
      >
        1 Week
      </p>
      <p
        class="item"
        :class="[
          active_item == 'one_month' ? 'option-selected' : 'option-unselected',
        ]"
        @click="selected('one_month')"
      >
        1 Month
      </p>
      <p
        class="item"
        :class="[
          active_item == 'three_month'
            ? 'option-selected'
            : 'option-unselected',
        ]"
        @click="selected('three_month')"
      >
        3 Month
      </p>
    </div>
    <div class="icon">
      <span style="color: #ff782e">
        <i class="fa fa-calendar" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_item: "all",
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
  /* background-color: white; */
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
/* Select all elements except first and last */
/* .list-items p:not(:first-child):not(:last-child) {
  color: aliceblue;
} */
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
.date-filter-container {
  display: flex;
}

.icon {
  margin-top: 10px;
  margin-left: 8px;
  padding: 5px 6px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  text-align: center;
  background-color: var(--appWhite);
}
</style>