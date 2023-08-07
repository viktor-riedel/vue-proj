<template>
    <div class="navigation">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <br>
        <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <router-view></router-view>
</template>

<script setup>
</script>

<style scoped>
</style>
