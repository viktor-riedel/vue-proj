<template>
    <p>Users</p>
    <ul>
        <li v-for="user in users">
            {{ user.id }} {{ user.name }} {{ user.last }} <router-link :to="{name: 'User', params: {id: user.id}}">Edit user</router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<script setup>
    import users from '../../data/users.json'
</script>

<style scoped>

</style>
