<template>
  <div>
    <p> {{title}}</p>
    <button @click="changeTitle">Change</button>
    <!-- <component2></component2> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Title'
    }
  },
  methods: {
    changeTitle() {
      this.title = "New Title";
    }
  }
}
</script>