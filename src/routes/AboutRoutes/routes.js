const aboutRoutes = [
    {
        path: "/about",
        name: "About",
        component: () => import('@/components/AboutComponent.vue'),
        children: [
            {
                path: "/about/users",
                name: "Users",
                component: () => import('@/components/users/UsersComponents.vue'),
            },
        ]
    },
]

export default aboutRoutes;
