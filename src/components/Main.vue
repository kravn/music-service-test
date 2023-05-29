<template>
    <v-container class="fill-height">
        <v-responsive class="text-center fill-height">
    
            <div class="py-14" />

            <v-icon size="200" color="pink">mdi-shopping-music</v-icon>
    
            <h1 class="text-h2 font-weight-bold">Music Service</h1>
            <div class="text-body-1 font-weight-light">Melodies Unleashed, Music Redefined</div>

            <div class="ms-features pt-16">
                <v-row>
                    <v-col>
                        <v-btn size="100" icon color="grey-darken-3">
                            <v-icon size="80" color="grey-darken-4">mdi-account-music</v-icon>
                        </v-btn>
                        <p class="text-subtitle-1 font-weight-regular text-pink-lighten-1 pa-4">{{ artist_store?.artists?.length }} Artists</p>
                    </v-col>
                    <v-col>
                        <v-btn size="100" icon color="grey-darken-3">
                            <v-icon size="80" color="grey-darken-4">mdi-album</v-icon>
                        </v-btn>
                        <p class="text-subtitle-1 font-weight-regular text-pink-lighten-1 pa-4">{{ artist_store?.albums?.length }} Albums</p>
                    </v-col>
                    <v-col>
                        <v-btn size="100" icon color="grey-darken-3">
                            <v-icon size="80" color="grey-darken-4">mdi-account-music</v-icon>
                        </v-btn>
                        <p class="text-subtitle-1 font-weight-regular text-pink-lighten-1 pa-4">{{ artist_store?.songs?.length }} Songs</p>
                    </v-col>
                </v-row>
            </div>
            
    
        </v-responsive>
    </v-container>
</template>

<script setup>

import { useArtistStore } from '@/store/artist'

const artist_store = useArtistStore()

</script>
  