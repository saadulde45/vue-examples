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

import { GameMixin } from "./GameMixin";

export default {
  mixins: [GameMixin]
};
</script>

<style>
</style>
