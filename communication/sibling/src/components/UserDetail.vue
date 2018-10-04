<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Other Details</p>
        <p>Name - {{name}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
import { eventBus} from "../main";

export default {
  props: {
    name: String
  },
  methods: {
      resetName() {
          this.$emit("resetNameEvent", "Saad");
      }
  },
  created() {
      eventBus.$on("nameWasEdited", (data) => {
          this.name = data;
      });
  }
};
</script>

<style scoped>
div {
  background-color: rgb(255, 218, 149);
}
</style>
