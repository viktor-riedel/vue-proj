const homeRoutes = [
    {
        path: "/home",
        name: "Home",
        component: () => import('../../Components/HomeComponent.vue')
    },
]

export default homeRoutes;
