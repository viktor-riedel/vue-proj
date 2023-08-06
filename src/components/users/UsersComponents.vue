<template>
    <p>Users</p>
    <ul>
        <li v-for="user in users">
            {{ user.id }} {{ user.name }} {{ user.last }}
        </li>
    </ul>
</template>

<script setup>
    import users from '../../data/users.json'
</script>

<style scoped>

</style>
