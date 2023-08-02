<template>
    <div class="home">
        <h1>Home {{val}}</h1>
    </div>
    <button @click="increase">INC</button>
    <button @click="decrease">DEC</button>
</template>

<script setup>
    import {ref} from "vue";

    const val = ref(0)

    const increase = () => {
        val.value++;
    }

    const decrease = () => {
        val.value--;
    }
</script>

<style scoped>

</style>
