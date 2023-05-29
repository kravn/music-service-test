<template>
    <v-list>
        <v-list-item
            :prepend-avatar="user.avatar"
            :title="`${user.first_name} ${user.last_name}`"
            :subtitle="user.email">
            
            <template v-slot:append>
                <v-btn
                    size="small"
                    variant="text"
                    icon="mdi-menu-down">
                </v-btn>
            </template>

        </v-list-item>
    </v-list>

    <v-divider></v-divider>
</template>

<script setup>

import { ref } from 'vue'
import { USER_DETAILS } from '@/constants/tags'

const user = ref(USER_DETAILS)

</script>