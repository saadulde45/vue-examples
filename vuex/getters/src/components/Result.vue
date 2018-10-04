<template>
<div>
    <p>Counter is: {{ counter }}</p>
    <p> Clicks are: {{clicks}} </p>
    </div>
</template>

<script>

// import { mapGetters } from "vuex";

export default {
  // props: ['counter']
  computed: {
    counter() {
      //   return this.$store.state.counter;
      return this.$store.getters.doubleCounter;
    },
    clicks() {
      return this.$store.getters.stringCounter;
    }
  }

  // computed: {
  //   ...mapGetters({
  //     counter: "doubleCounter",
  //     clicks: "stringCounter"
  //   }),
  //   customProp() {}
  // }
};
</script>