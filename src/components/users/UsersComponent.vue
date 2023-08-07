<template>
    <p>Users</p>
    <ul>
        <li v-for="user in users" style="margin: 15px">
            <router-link :to="{name: 'User', params: {id: user.id}}">
                {{ user.name }} {{ user.last }}
            </router-link>
            <button style="margin-left: 10px" @click="showModal = true">Delete user</button>
        </li>
    </ul>
    <modal v-model="showModal">
        <template #title>Delete????</template>
        Delete this user?
    </modal>
    <router-view></router-view>
</template>

<script setup>
    import {ref} from "vue";
    import users from '../../data/users.json'
    import modal from "@/components/modals/Modal.vue"


    const showModal = ref(false)
</script>

<style scoped>

</style>
