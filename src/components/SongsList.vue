<template>
    <div class="ms-songs-table pa-2">

        <Table
            v-model="songs"
            custom-headers
            complexed
            paginate
            @on-page-change="onPageChange"
            @on-limit-change="onLimitChange"
            @on-sort="onSortOrder"
            @on-sort-by="onSortBy">
            
            <template #table-header>
                <TableHeader
                    append-btn
                    @on-append-btn-click="onHeaderClick('name')">Song Title</TableHeader>
                <TableHeader
                    append-btn
                    @on-append-btn-click="onHeaderClick('track')">Track #</TableHeader>
                <TableHeader
                    append-btn disabled-btn
                    @on-append-btn-click="onHeaderClick('albumId')">Album</TableHeader>
                <TableHeader
                    append-btn disabled-btn
                    @on-append-btn-click="onHeaderClick('year_released')">Year Released</TableHeader>
                <TableHeader
                    append-btn disabled-btn
                    @on-append-btn-click="onHeaderClick('artist')">Artist</TableHeader>
            </template>

            <Row
                v-for="song in songs"
                :key="song.id">

                <Cell>{{ song.name }}</Cell>
                <Cell>{{ song.track }}</Cell>
                <Cell>{{ song.album?.name }}</Cell>
                <Cell>{{ song.album?.year_released }}</Cell>
                <Cell>{{ song.artist?.name }}</Cell>

            </Row>

        </Table>

    </div>
</template>

<script setup>

import { computed, onMounted } from 'vue'
import { useArtistStore } from '@/store/artist'
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
import Row from './TableRow.vue'
import Cell from './TableCell.vue'

const artist_store = useArtistStore()

// Computed props
const songs = computed(() => artist_store.songs)
const params = computed(() => artist_store.params)
const pagination = computed(() => artist_store.pagination)

onMounted( async () => {
    await fetchSongs()
})

// Methods
const fetchSongs = async () => {
    await artist_store.fetchSongs()
}
const onPageChange = async (value) => {
    params.value['_page'] = value
    
    await artist_store.fetchSongs()
}
const onLimitChange = (value) => {
    console.log('On page limit change...', value)
}
const onSortOrder = async (value) => {
    await artist_store.fetchSongs()
}
const onSortBy = (value) => {
    console.log('On sort by change...', value)
}
const onHeaderClick = async (value) => {
    params.value['_order'] = getSort()
    params.value['_sort'] = params.value['_order'] ? value : ''

    console.log('-----> ', params.value)

    pagination.value.page = 1
    pagination.value.sort_order = params.value['_order'] 
}

const getSort = () => {
    switch (pagination.value.sort_order) {
        case 'asc':
            return 'desc'
        case 'desc':
            return ''
        case '':
            return 'asc'
    }
}

</script>