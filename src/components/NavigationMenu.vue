<template>
    <v-list class="ms-navigation-menu">
        
        <slot name="nav-header" />

        <div class="pa-2">

            <slot />

        </div>
    </v-list>
</template>

<script setup>

const props = defineProps({
    prependIcon: {
        type: String,
        default: 'mdi-circle'
    }
})

</script>