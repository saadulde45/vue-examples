<template>
    <div class="component">
        <h1>Parent User Component</h1>
        <p>Generic Title</p>
        <button @click="changeName">Change Name</button>
        <p> {{name}} </p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
                
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Saad"
    };
  },
  methods: {
    changeName() {
      this.name = "Sad :(";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: rgb(216, 216, 216);
}
</style>
