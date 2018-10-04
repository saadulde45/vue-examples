<template>
    <div class="component">
        <h3>Edit User</h3>
        <button @click="editName">Karde bhai!</button>
    </div>
</template>

<script>
import { eventBus} from "../main";

export default {
    methods: {
        editName() {
            eventBus.$emit("nameWasEdited", "Saad Edited");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
