<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="asyncIncrement(1000)">Async Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    //   ...mapMutations({
    //       increment: 'incrementCounter',
    //       decrement: 'decrementCounter'
    //   })
    ...mapActions({
      increment: "increment",
      decrement: "decrement",
      asyncIncrement: "asyncIncrement"
    })
  }
};
</script>