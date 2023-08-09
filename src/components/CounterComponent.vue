<template>
    <p>Count: {{ useCounter.counter }}</p>
    <p>Value is {{ useCounter.oddEven }}</p>
    <button @click="useCounter.increment">INC</button>
    <br>
    <button @click="useCounter.double">DOUBLE</button>
</template>

<script setup>
    import {useCounterStore} from "../store/counter";

    const useCounter = useCounterStore()

</script>

<style scoped>

</style>
