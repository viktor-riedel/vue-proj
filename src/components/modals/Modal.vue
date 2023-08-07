<template>
    <teleport to=".modals-container">
        <div class="modal" v-if="modelValue">
            <h1>
                <slot name="title"></slot>
            </h1>
            <p>
                <slot></slot>
            </p>
            Username: {{ user.name }}
            <br><br>
            <button @click="closeWindow">Close</button>
        </div>
    </teleport>
</template>

<script setup>
    import {inject} from "vue";

    const props = defineProps(
        {
            modelValue: Boolean, default: false,
        }
    )

    const user = inject('user')

    const emits = defineEmits(['update:modelValue'])

    const closeWindow = () => {
        emits('update:modelValue', false)
    }
</script>

<style scoped>
    .modal {
        background: beige;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }
</style>
