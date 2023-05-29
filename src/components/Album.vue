<template>
    <v-col >
        <div class="pa-2">
        
            <v-card
                class="ms-album mx-auto"
                min-width="220"
                flat>

                <template v-slot:loader="{ isActive }">
                    <v-progress-linear
                        :active="isActive"
                        color="deep-purple"
                        height="4"
                        indeterminate>
                    </v-progress-linear>
                </template>

                <v-img
                    cover
                    height="150"
                    :src="generate_img"
                    :lazy-src="generate_img"
                    class="align-start"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                    <v-card-title
                        class="text-caption text-medium-emphasis text-white font-weight-medium"
                        v-text="`${album.name} (${album.year_released})`">
                    </v-card-title>
                </v-img>

                <slot />

                <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0 pt-2">
                        <v-rating
                            :model-value="generate_star"
                            color="pink"
                            density="compact"
                            half-increments
                            readonly
                            size="small">
                        </v-rating>
                    </v-row>
                    <v-row
                        align="center"
                        class="mx-0">
                        <div class="text-grey font-weight-medium pt-1 pl-1">
                            {{ generate_star }} (<span class="text-grey-darken-1 font-weight-light">{{ generate_votes }}</span>)
                        </div>
                    </v-row>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="pink"
                        variant="text"
                        @click="{}">
                        <v-icon>mdi-play</v-icon>
                        <span class="font-weight-regular">Play</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        
        </div>
    </v-col>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
    album: {
        type: Object,
        required: true
    }
})

const generate_img = computed(() => {
    const str = `https://picsum.photos/${Math.floor(Math.random() * (350 - 300 + 1)) + 300}`
    return str
})
const generate_star = computed(() => {
    const min = 3
    const max = 5
    const decimalPlaces = Math.floor(Math.random() * 4) + 2

    const randomNumber = (Math.random() * (max - min) + min).toFixed(decimalPlaces)
    
    return Number(randomNumber).toFixed(2)
})
const generate_votes = computed(() => {
    const num = Math.floor(Math.random() * 99999)

    const numberWithCommas = num.toLocaleString()
    return numberWithCommas
})

</script>