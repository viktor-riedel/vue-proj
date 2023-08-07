<template>
    <div v-if="user">
        Found user: {{ user }}
    </div>
    <div v-else>
        Not found
    </div>
    <button @click="showUsers">Back to Users</button>
</template>

<script setup>
    import users from '../../data/users.json'
    import {useRoute, useRouter} from "vue-router";
    import {computed} from "vue";

    const router = useRouter();
    const route = useRoute();

    const user = computed(() => {
        if (parseInt(route.params.id) > 0) {
            return users.find(us => us.id === parseInt(route.params.id))
        }
        return null
    })

    const showUsers = () => {
        router.push({name: "Users"})
    }
</script>

<style scoped>

</style>
