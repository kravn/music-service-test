<template>
    <div class="pa-2">
        <v-hover v-slot="{ isHovering, props }">
            <!-- :color="selectRandomColor" -->
            <v-card
                class="ms-artist mx-auto"
                width="320"
                flat
                color="grey-darken-3"
                variant="outlined"
                v-bind="props">

                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5 text-grey-lighten-3">
                            {{ artist.name }}
                        </v-card-title>

                        <v-card-subtitle class="ms-artist-albums text-white">
                            
                            <slot name="album-slot" :albums="artist.albums" />

                        </v-card-subtitle>

                        <v-card-actions class="pa-0">
                            <v-btn
                                color="pink"
                                variant="text">
                                <v-icon size="30">mdi-play-circle</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0">
                        <v-img
                            :src="generate_img"
                            :lazy-src="generate_img">
                        </v-img>
                    </v-avatar>

                </div>

                <v-overlay
                    :model-value="isHovering"
                    contained
                    scrim="black"
                    class="align-center justify-center">
                    <v-btn
                        variant="flat"
                        class="font-weight-medium"
                        color="pink"
                        size="x-large">
                        <v-icon size="36">mdi-play-box</v-icon>
                        <span class="text-pink-lighten-4 pl-1">Start Radio</span>
                    </v-btn>
                </v-overlay>

            </v-card>
        </v-hover>
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { COLORS } from '@/constants/tags'

const props = defineProps({
    artist: {
        type: Object,
        required: true
    }
})

// States
const img = ref(null)
const colors = ref(COLORS)

// Computed props
const artist = computed(() => props.artist)
const generate_img = computed(() => {
    const str = `https://picsum.photos/${Math.floor(Math.random() * (350 - 300 + 1)) + 300}`
    return str
})
const selectRandomColor = computed(() => {
    const randomIndex = Math.floor(Math.random() * colors.value.length)
    return colors.value[randomIndex]
})

onMounted(() => {
    img.value = 'https://picsum.photos/200'
})

</script>