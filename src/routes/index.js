import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from './HomeRoutes/routes'
import aboutRoutes from './AboutRoutes/routes'

let routes= [
    {
        path: "/",
        name: "Index",
        component: () => import('../components/HomeComponent.vue')
    },
]
routes = routes.concat(homeRoutes, aboutRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
    base: '/'
})

export default router;
