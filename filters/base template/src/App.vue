<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p> {{text | to-lowercase}} </p>
                <!-- <p> {{text | to-lowercase | to-uppercase}} </p> -->
            </div>
        </div>
        <!-- <div class="row">
            <input v-model="filterGame">
            <ul>
                <li v-for="game in filteredGames" :key="game">{{game}}</li>
            </ul>
        </div>
        <hr> -->
        <!-- <imported-list></imported-list> -->
    </div>
</template>

<script>

// import List from "./List.vue";

export default {
  data() {
    return {
      text: "Hello",
      games: ["Battlefield V", "Hitman", "Elder Scrolls", "Call of Duty"],
      filterGame: ""
    };
  },
//   filters: {
//     "to-uppercase"(value) {
//       return value.toUpperCase();
//     }
//   },
//   computed: {
//       filteredGames() {
//           return this.games.filter((game) => {
//               return game.match(new RegExp(this.filterGame, 'i'));
//           });
//       }
//   },
//   components: {
//       'imported-list': List
//   }
};
</script>

<style>
</style>
