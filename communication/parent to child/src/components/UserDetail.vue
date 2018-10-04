<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Other Details</p>
        <p>Name - {{name}}</p>
    </div>
</template>

<script>

export default {
  props: ["name"]
};
</script>

<style scoped>
div {
  background-color: rgb(255, 218, 149);
}
</style>
