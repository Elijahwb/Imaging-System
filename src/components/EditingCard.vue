<template>
  <div class="card-container">
    <div class="card-head">{{ heading }}</div>
    <div class="card-details">
      <slot></slot>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "EditingCard",
  props: {
    heading: String,
  },
};
</script>

<style scoped>
.card-head {
  color: var(--appWhite);
  padding: 8px 8px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.metric {
  font-size: 24px;
}
.card-details {
  margin-top: 2px;
  padding: 10px 15px;
  display: flex;
  background-color: rgb(224, 220, 220);
  justify-content: space-between;
  align-items: center;
  color: gray;
  border-radius: 0px 0px 8px 8px;
}
.card-container {
  text-align: left;
  width: 100%;
  background: var(--dsBrandColor);
  /* padding: 10px 15px; */
  color: var(--appWhite);
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  margin: 5px 8px 10px 5px;
}
</style>> 
