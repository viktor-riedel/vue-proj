const counterRoutes = [
    {
        path: "/counter",
        name: "Counter",
        component: () => import('@/components/CounterComponent.vue'),
    },
]

export default counterRoutes;
