import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
        path: '/',
        name: 'home',
        component: HomePage
        },
        {
        path: '/projects:slug',
        name: 'single-project',
        component: SingleProject
        },
        {
        path: '/errors',
        name: 'error404',
        component: Error404
        }
    ]
});
export { router };