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
    import {vAutoFocus} from "../directives/vAutoFocus";
    import {useCounter} from "@/use/useCounter";

    const {val, obj, name, increase, decrease} = useCounter()
</script>
