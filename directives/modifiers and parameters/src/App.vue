<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- <p v-highlight>Color me!</p> -->
                <!-- <p v-highlight="'orange'">Color me!</p> -->
                <!-- <p v-highlight:background="'orange'">Color me!</p> -->
                <p v-highlight:background.delayed="'orange'">Color me!</p>
                <!-- <p v-local-highlight:background.delayed="'orange'">Color me!</p> -->
                <p v-local-highlight:background.delayed.blink="'orange'">Color me!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding) {
        let delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 2000;
        }

        if (binding.modifiers["blink"]) {
          let primaryColor = binding.value;
          let secondaryColor = "blue";
          let currentColor = primaryColor;

          setInterval(() => {
            currentColor =
              currentColor !== primaryColor ? primaryColor : secondaryColor;

            el.style.color = currentColor;
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
