<template>
    <v-list-item
        :class="{
            'bg-pink text-pink-lighten-5': props.activeList
        }"
        rounded="xl">

        <template v-slot:prepend>
            <v-icon :icon="props.prependIcon"></v-icon>
        </template>

        <v-list-item-title>

            <slot />
            
        </v-list-item-title>
        
    </v-list-item>
</template>

<script setup>

const props = defineProps({
    prependIcon: {
        type: String,
        default: 'mdi-circle'
    },
    activeList: {
        type: Boolean,
        default: false
    }
})

</script>