import { defineStore } from 'pinia'
import { API } from '@/api/apis'
import axios from '@/api/axios'

const PAGE_LIMIT = 10

export const useArtistStore = defineStore('app', {
    state: () => ({
        artists: null,
        albums: null,
        songs: null,
        pagination: {
            limit: PAGE_LIMIT,
            page: 1,
            total_page: 0,
            sort_by: 'name',
            sort_order: 'asc'
        },
        params: {
            '_page': 1,
            '_limit': PAGE_LIMIT,
            '_expand': ['album', 'artist'],
            '_sort': '',
            '_order': ''
        }
    }),
    getters: {},
    actions: {
        async fetchArtists (params = {}) {
            await axios.get(API.artists, {
                params
            })
            .then(response => {
                // Handle successful response
                this.artists = response.data
            })
            .catch(error => {
                // Handle error
                console.error(error);
            })
        },
        async fetchAlbums (params = {}) {
            await axios.get(API.albums, {
                params
            })
            .then(response => {
                // Handle successful response
                this.albums = response.data
            })
            .catch(error => {
                // Handle error
                console.error(error);
            })
        },
        async fetchSongs () {
            const { params } = this
            
            await axios.get(API.songs, {
                params,
            })
            .then(response => {
                // Handle successful response
                this.songs = response.data
                this.pagination.page = params['_page']
                this.pagination.total_page = response.headers['x-total-count']
            })
            .catch(error => {
                // Handle error
                console.error(error);
            })
        }
    }
})
