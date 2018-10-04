<template>
    <div>
      <p class="italic">Everyone is sleepy</p>
      <button @click="counter++">Sleepy Head Count</button>
      <p> {{counter}} already slept</p>
    </div>
</template>

<script>
  export default {
    data: function() {
      return {
        counter: 0
      }
    }
  }
</script>


