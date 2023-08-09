<template>
    <div class="modals-container"></div>
    <div class="navigation">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <br>
        <router-link :to="{name: 'About'}">About</router-link>
        <br>
        <router-link :to="{name: 'Counter'}">Counter</router-link>
    </div>
    <router-view></router-view>
    <div class="user">
        User: {{obj.name}}
        Status:
        <template v-if="online">
            <span style="color: green">Online</span>
        </template>
        <template v-else>
            <span style="color: red">Offline</span>
        </template>
    </div>
</template>

<script setup>
    import {provide, reactive} from "vue";
    import {useOnline} from '@vueuse/core'

    const obj = reactive({
        name: 'Viktor',
        email: "test@test.com"
    })

    const online = useOnline()

    provide('user', obj)
</script>

<style scoped>
    .user {
        position: absolute;
        top: 0;
        right: 0;
        background: beige;
        padding: 10px;
        border: 1px solid black;
        border-radius: 5px;
    }
</style>
