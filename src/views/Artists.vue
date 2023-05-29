<template>
    <v-container fluid>
        
        <SectionHeader
            title="List of Available Artists"
            subtitle="ON FIXED-WIDTH CARDS" />
        
        <v-row>
            <template
                v-for="(artist, key) in artists"
                :key="key">

                <Artist
                    :artist="artist">

                    <template #album-slot="{ albums }">
                        <span class="text-grey">Albums: {{ albums?.length }}</span>
                    </template>

                </Artist>

            </template>
        </v-row>
    </v-container>
</template>

<script setup>

import { computed, onMounted } from 'vue'
import { useArtistStore } from '@/store/artist.js'
import Artist from '@/components/Artist.vue'
import SectionHeader from '@/components/SectionHeader.vue'

// Store
const artist_store = useArtistStore()

// Computed props
const artists = computed(() => artist_store.artists)

onMounted( async () => {
    await artist_store.fetchArtists({ '_embed': 'albums' })
})

</script>