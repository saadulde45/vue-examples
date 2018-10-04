<template>
    <div class="container">
        <!-- <button @click="displayComponent = 'imageComponent'">Image</button>
        <button @click="displayComponent = 'textComponent'">Text</button>
        <component :is="displayComponent"></component> -->
        
        <text-component>
            <h1>{{title}}</h1>
        </text-component>
        <image-component>
            <h1>{{title}}</h1>
        </image-component>
    </div>
</template>

<script>
import Text from "./components/Text.vue";
import Image from "./components/Image.vue";

export default {
  data: function() {
    return {
      title: "Hello",
    //   displayComponent: "textComponent"
    };
  },
  components: {
    textComponent: Text,
    imageComponent: Image
  }
};
</script>

<style>
/* h1 {
        color: orange;
    } */
</style>
