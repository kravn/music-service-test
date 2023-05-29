<template>
    <v-navigation-drawer color="black">

        <NavigationMenu v-model="active_menu">
            
            <template #nav-header>
                <User />
            </template>
            
            <NavigationMenuItem
                v-for="(item, i) in menu_items"
                :key="i"
                :value="item"
                :active-list="item.text === currentRouteName"
                :prepend-icon="item.icon"
                @click="onClick(item)">

                <span>{{ item.text }}</span>

            </NavigationMenuItem>

        </NavigationMenu>

    </v-navigation-drawer>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useRoute, useRouter  } from 'vue-router'
import { APP_MENU } from '@/constants/tags'
import User from '@/components/User.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import NavigationMenuItem from '@/components/NavigationMenuItem.vue'

const router = useRouter ()
const current_route = useRoute()

const currentRouteName = computed(() => current_route.name)

const menu_items = ref(APP_MENU)
const active_menu = ref(menu_items.value.find(i => i.name === currentRouteName.name))

// Methods
const onClick = (item) => {
    active_menu.value = item
    router.push(item.path)
}

</script>