<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
    methods: {
      increment() {
        // this.$store.state.counter += 1;
        this.$store.commit("incrementCounter");
      },
      decrement() {
        // this.$store.state.counter -= 1;
        this.$store.commit("decrementCounter");
      }
    }

//   methods: {
//     ...mapMutations({
//       increment: "incrementCounter",
//       decrement: "decrementCounter"
//     })
//   }
};
</script>