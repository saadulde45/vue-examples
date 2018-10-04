<template>
    <div class="container" style="padding-top: 50px;">
        <form class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="userData.message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="notificationMethod"> Send Mail
                        </label>
                        <label for="sendChat">
                            <input
                                    type="checkbox"
                                    id="sendChat"
                                    value="SendChat"
                                    v-model="notificationMethod"> Send Chat
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option 
                            v-for="priority in priorities" 
                            :key="priority" 
                            :selected="priority === 'Medium'"
                        >{{priority}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <!-- <switch-component 
                        v-model="dataSwtich"></switch-component> -->
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space: pre">Message: {{userData.message}}</p>
                        <p><strong>Notification Methods</strong></p>
                        <ul>
                            <li v-for="type in notificationMethod" :key="type">{{type}}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <!-- <p>Switched: {{dataSwtich}}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Switch from "./switch.vue";

export default {
  data() {
    return {
      userData: {
        email: "saad@gmail.com",
        password: "test",
        age: 28,
        message: ""
      },
      notificationMethod: [],
      gender: "Male",
      priorities: ["High", "Medium", "Low"],
      selectedPriority: "High",
      dataSwtich: true,
      isSubmitted: true
    };
  },
//   components: {
//       switchComponent: Switch
//   },
  methods: {
      submitForm() {
          this.isSubmitted = true;
      }
  }
};
</script>

<style>
</style>
