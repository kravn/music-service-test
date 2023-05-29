<template>
    <div>
        <p class="text-h5 text-center pt-4 text-pink-lighten-1 font-weight-light">
            {{ props.title }}
        </p>
        <p class="text-subtitle-2 text-center pb-6 text-grey-lighten-1 font-weight-light">
            {{ props.subtitle }}
        </p>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    subtitle: {
        type: String,
        default: 'Subtitle'
    }
})

</script>