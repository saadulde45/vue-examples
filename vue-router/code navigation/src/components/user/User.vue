<template>
    <div>
    <h1>The User Page</h1>
    <hr>
    <!-- <p> Current ID: {{id}} </p> -->
    <button @click="homeNav">Go to Home</button>
    </div>
</template>

<script>
export default {
//   data() {
//     return {
//       id: this.$route.params.id
//     };
//   },
//   watch: {
//       '$route'(to, from) {
//           this.id = to.params.id
//       }
//   },
  methods: {
    homeNav() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
