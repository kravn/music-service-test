<template>
    <v-container fluid>

        <SectionHeader
            title="List of Official Albums"
            subtitle="ON GRID VIEW" />

        <v-row no-gutters>
            <template
                v-for="(album, key) in albums"
                :key="key">

                <Album
                    :album="album">

                    <v-card-item class="text-white pl-5">
                        <v-card-title class="font-weight-regular text-grey-lighten-2">
                            {{ album.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            <span class="font-weight-regular">
                                {{ album.artist.name }} ({{ album.year_released }})
                            </span>

                            <v-icon
                                color="pink-lighten-2"
                                size="small"
                                class="ml-2">
                                mdi-guitar-acoustic
                            </v-icon>
                            
                        </v-card-subtitle>
                    </v-card-item>

                </Album>

            </template>
        </v-row>
    </v-container>
</template>

<script setup>

import { computed, onMounted } from 'vue'
import { useArtistStore } from '@/store/artist.js'
import Album from '@/components/Album.vue'
import SectionHeader from '@/components/SectionHeader.vue'

// Store
const artist_store = useArtistStore()

// Computed props
const albums = computed(() => artist_store.albums)

onMounted( async () => {
    await artist_store.fetchAlbums({ '_expand': 'artist' })
})

</script>