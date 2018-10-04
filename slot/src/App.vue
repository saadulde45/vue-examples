<template>
    <div class="container">
        <!-- <text-component text="Hello"></text-component> -->
        <text-component>
            <h1>{{title}}</h1>
        </text-component> 
        <!-- <text-component>
            <div slot="bold">
                <h1>{{title}}</h1>
                <p> World</p>
            </div>
            <div slot="italic">
                <h1>{{title}}</h1>
                <p> Text</p>
            </div>
        </text-component> -->
    </div>
</template>

<script>
import Text from "./components/Text.vue";

export default {
  data: function() {
    return {
      title: "Hello"
    };
  },
  components: {
    textComponent: Text
  }
};
</script>

<style>
/* h1 {
        color: orange;
    } */
</style>
