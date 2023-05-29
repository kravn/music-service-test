<template>
    <th class="sm-table-header">
        
        <slot />

        <v-btn
            v-if="props.appendBtn"
            icon
            size="24"
            :color="`${props.disabledBtn ? 'grey-darken-3' : 'grey-darken-4'}`"
            :variant="`${props.disabledBtn ? 'outlined' : 'flat'}`"
            class="sm-table-header-btn"
            :disabled="props.disabledBtn"
            @click="onClick">
            <v-icon color="grey-darken-3">
                {{ get_icon  }}
            </v-icon>
        </v-btn>

    </th>
</template>

<script setup>

import { computed } from 'vue'
import { useArtistStore } from '@/store/artist'

const emit = defineEmits(['on-append-btn-click'])

const props = defineProps({
    appendBtn: {
        type: Boolean,
        default: false
    },
    disabledBtn: {
        type: Boolean,
        default: false
    }
})

const artist_store = useArtistStore()

const get_icon = computed(() => artist_store.pagination.sort_order === 'asc' ? 'mdi-menu-up' : artist_store.pagination.sort_order === 'desc' ? 'mdi-menu-down' : 'mdi-menu-swap')

const onClick = () => {
    if (props.disabledBtn) return

    emit('on-append-btn-click')
}
</script>