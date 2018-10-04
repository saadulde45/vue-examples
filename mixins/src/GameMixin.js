export const GameMixin = {
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
  },
  // created() {
  //   console.log("created from mixin");
  // }
};