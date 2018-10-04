<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{text | to-uppercase | to-lowercase}} </p>
            </div>
        </div>
        <div class="row">
            <!-- <button @click="games.push('Limbo')">Add Game</button> -->
            <input v-model="filterGame">
            <ul>
                <li v-for="game in filteredGames" :key="game">{{game}}</li>
            </ul>
        </div>
        <hr>
        <imported-list></imported-list>
    </div>
</template>

<script>

import List from "./List.vue";
import { GameMixin } from "./GameMixin";

export default {
  data() {
    return {
      text: "Hello"
    };
  },
  filters: {
    "to-uppercase"(value) {
      return value.toUpperCase();
    }
  },
  mixins: [GameMixin],
  components: {
      'imported-list': List
  },
//   created() {
//     console.log("created from component");
//   }
};
</script>

<style>
</style>
