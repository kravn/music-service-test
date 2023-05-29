<template>
    <v-app>

        <AppBar icon="mdi-shopping-music">
            <span class="font-weight-light pl-3 pt-4">
                {{ title }}
            </span>
        </AppBar>

        <NavBar />

        <DefaultView />
      
    </v-app>
</template>

<script setup>

import { ref } from 'vue'
import { APP_NAME } from '@/constants/tags'
import AppBar from './AppBar.vue'
import DefaultView from './View.vue'
import NavBar from './NavBar.vue'

const title = ref(APP_NAME)

</script>
