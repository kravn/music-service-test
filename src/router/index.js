// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/layouts/default/Index.vue'
import Home from '@/views/Home.vue'
import Artist from '@/views/Artists.vue'
import Album from '@/views/Albums.vue'
import Song from '@/views/Songs.vue'

const routes = [
    {
        path: '/',
        component: () => MainComponent,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
            {
                path: 'artists',
                name: 'Artists',
                component: Artist,
            },
            {
                path: 'albums',
                name: 'Albums',
                component: Album,
            },
            {
                path: 'songs',
                name: 'Songs',
                component: Song,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
