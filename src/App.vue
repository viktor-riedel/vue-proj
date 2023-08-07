<template>
    <div class="modals-container"></div>
    <div class="navigation">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <br>
        <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <router-view></router-view>
</template>

<script setup>
    import {provide, reactive} from "vue";

    const obj = reactive({
        name: 'Viktor',
        email: "test@test.com"
    })

    provide('user', obj)
</script>

<style scoped>
</style>
