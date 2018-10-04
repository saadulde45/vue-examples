<template>
        <div>
          <p> Mixins</p>
            <input v-model="filterGame">
            <ul>
                <li v-for="game in filteredGames" :key="game">{{game}}</li>
            </ul>
        </div>
</template>

<script>
export default {
  data() {
    return {
      games: ["Battlefield V", "Hitman", "Elder Scrolls", "Call of Duty"],
      filterGame: ""
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => {
        return game.match(new RegExp(this.filterGame, "i"));
      });
    }
  }
};
</script>

<style>
</style>
