<template>
  <div>
    <p> {{title}}</p>
    <button @click="changeTitle">Change</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Title 2'
    }
  },
  methods: {
    changeTitle() {
      this.title = "New Title 2";
    }
  }
}
</script>