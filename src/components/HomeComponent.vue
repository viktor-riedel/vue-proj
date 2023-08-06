<template>
    <div class="home">
        <h1>Home {{val}}</h1>
    </div>
    <button @click="increase">INC</button>
    <button @click="decrease">DEC</button>
    <hr style="width: 100%">
    {{ obj.id }} {{ name }}
    <hr style="width: 100%">
    <input type="text" placeholder="input text" v-auto-focus>
    <hr style="width: 100%">
</template>

<script setup>
    import {ref, reactive, computed } from "vue";
    import {vAutoFocus} from "../directives/vAutoFocus";

    const val = ref(0)
    const obj = reactive({
        id: 0,
        name: 'test'
    })

    const name = computed(() => {
        return obj.id % 2 === 0 ? 'even' : 'odd';
    })

    const increase = () => {
        val.value++;
        obj.id++;
    }

    const decrease = () => {
        val.value--;
        obj.id--;
    }
</script>

<style scoped>

</style>
