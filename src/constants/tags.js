export const APP_NAME = 'Music Service'

export const APP_MENU = [
    { text: 'Home',
    link: 'Home', path: '/', icon: 'mdi-home-circle' },
    { text: 'Artists', link: 'Artists', path: '/artists', icon: 'mdi-account-music' },
    { text: 'Albums', link: 'Albums', path: '/albums', icon: 'mdi-album' },
    { text: 'Songs', link: 'Songs', path: '/songs', icon: 'mdi-music-circle' },
]

// Song Title, Track #, Album, Year Released, Artist
export const TABLE_HEADERS = [
    {
        name: 'name',
        value: 'name',
        title: 'Song Title',
        sortable: true,
    },
    {
        name: 'track',
        value: 'track',
        title: 'Track #',
        sortable: true,
    },
    {
        name: 'album',
        value: 'name',
        title: 'Album',
        sortable: true,
    },
    {
        name: 'year_released',
        value: 'year_released',
        title: 'Year Released',
        sortable: true,
    },
    {
        name: 'artist',
        value: 'name',
        title: 'Artist',
        sortable: true,
    }
]

export const USER_DETAILS = {
    avatar: 'https://cdn.vuetifyjs.com/images/john.png',
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@google.com'
}

export const COLORS = [
    '#004d40',
    '#ff8322',
    '#4caf50',
    '#1d9fb1',
    '#1db11f',
    '#325f9f',
    '#4c4e50',
    '#6016cb',
    '#b80ebf',
    '#cf1f63',
    '#cb1515',
    '#bdae2a',
    '#7abd2a',
    '#17a77c',
    '#174da7',
    '#f77825',
    '#f55442',
    '#dc3241',
    '#af3078',
    '#a33ca2',
    '#7943a4',
    '#2556ac',
    '#009983',
    '#00ae5a',
    '#a0ce49'
]