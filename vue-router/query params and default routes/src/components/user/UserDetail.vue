<template>
    <div>
        <h3>Some User Details</h3>
        <p> User ID: {{$route.params.id}}</p> 
        <router-link tag="button" :to="'/user/' + $route.params.id + '/edit'">Edit User</router-link>
        <!-- <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id}}">Edit User</router-link> -->
        <!-- <router-link tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id}, query: { locale: 'en', q: 100}}">Edit User</router-link> -->
    </div>
</template>