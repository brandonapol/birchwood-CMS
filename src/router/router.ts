import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { authGuard } from '@auth0/auth0-vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Birchwood CMS'
            },
            // beforeEnter: authGuard
        }
    ]
})

export default router