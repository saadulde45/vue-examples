<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                            type="text"
                            id="name"
                            class="form-control"
                            v-model="userData.name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email">
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input
                            type="number"
                            id="age"
                            class="form-control"
                            v-model="userData.age">
                </div>
                <div class="form-group">
                    <label for="type">Type</label>
                    <input
                            type="text"
                            id="type"
                            class="form-control"
                            v-model="type">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <button class="btn btn-primary" @click="fetch">Get Data</button>
                <ul>
                    <li v-for="user in userList" :key="user.name">{{user.name}}: {{user.age}} - {{user.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        age: 28
      },
      userList: [],
      resource: {},
      type: "save"
    };
  },
  methods: {
    submit() {
      // this.$http.post("", this.userData).then(
      //   this.$http
      //     .post(
      //       "save.json",
      //       this.userData
      //     )
      //     .then(
      //       response => {
      //         console.log("success", response);
      //       },
      //       error => {
      //         console.log("error", error);
      //       }
      //     );
      // this.resource.save({}, this.userData);
      this.resource.saveAlt({}, this.userData);
    },
    fetch() {
      // this.$http.get("").then(
      //   this.$http.get("save.json").then(
      this.resource
        .getData({ type: this.type })
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log("error", error);
          }
        )
        .then(data => {
          let tempArr = [];
          for (let key in data) {
            tempArr.push(data[key]);
          }
          this.userList = tempArr;
        });
    }
  },
  created() {
    const customAction = {
      saveAlt: {
        method: "POST",
        url: "alt.json"
      },
      getData: {
        method: "GET"
      }
    };
    this.resource = this.$resource("{type}.json", {}, customAction);
  }
};
</script>

<style>
</style>
