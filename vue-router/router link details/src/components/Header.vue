<template>
  <ul class="nav nav-pills nav-fill">
    <!-- <li class="nav-item nav-link"><router-link to="/">Home</router-link></li>
    <li class="nav-item nav-link"><router-link to="/user">User</router-link></li> -->

    <!-- Why doesn't the Home routes active class get removed? Always "/"-->
    <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
  </ul>
</template>