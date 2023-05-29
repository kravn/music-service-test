<template>
    <v-app-bar
        color="black"
        class="ms-app-bar"
        dark
        flat>
        <v-app-bar-title>

            <v-icon>
                {{ props.icon }}
            </v-icon>

            <slot />

        </v-app-bar-title>
    </v-app-bar>
</template>

<script setup>

const props = defineProps({
    icon: {
        type: String,
        default: 'mdi-menu'
    }
})

</script>
