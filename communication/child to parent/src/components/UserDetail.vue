<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Other Details</p>
        <p>Name - {{name}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>

export default {
  props: {
    name: String,
    resetFn: Function
  },
  methods: {
      resetName() {
          this.$emit("resetNameEvent", "Saad");
      }
  }
};
</script>

<style scoped>
div {
  background-color: rgb(255, 218, 149);
}
</style>
