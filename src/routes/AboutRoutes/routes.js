const aboutRoutes = [
    {
        path: "/about",
        name: "About",
        component: () => import('@/components/AboutComponent.vue'),
        children: [
            {
                path: "/about/users",
                name: "Users",
                component: () => import('@/components/users/UsersComponent.vue'),
                children: [
                    {
                        path: "/about/users/:id",
                        name: "User",
                        component: () => import('@/components/users/UserComponent.vue'),
                    },
                ]
            },
        ]
    },
]

export default aboutRoutes;
