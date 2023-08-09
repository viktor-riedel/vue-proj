import {defineStore} from "pinia";

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
        oddEven: (state) => state.counter % 2 === 0 ? 'even' : 'odd'
    },
    actions: {
        increment() {
            this.counter ++;
        },
        double() {
            this.counter *= 2;
        }

    }
})
