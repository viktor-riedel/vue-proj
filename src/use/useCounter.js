import {computed, reactive, ref} from "vue";

export function useCounter() {
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

    return {
        val,
        obj,
        name,
        increase,
        decrease
    }
}
