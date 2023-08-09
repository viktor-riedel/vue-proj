import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from './HomeRoutes/routes'
import aboutRoutes from './AboutRoutes/routes'
import counterRoutes from './StoreRoutes/routes'

let routes= [
    {
        path: "/",
        name: "Index",
        component: () => import('../components/HomeComponent.vue')
    },
]
routes = routes.concat(homeRoutes, aboutRoutes, counterRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/'
})

export default router;
