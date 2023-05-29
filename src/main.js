/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import axios from '@/api/axios'
import './utilities/general'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

axios.interceptors.request.use(
    config => {
        // Add headers to the request
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        
        config.headers['Authorization'] = `Bearer ${token}`
        config.headers['Content-Type'] = 'application/json'  // Example: content type header
        
        return config
    },
    error => {
        return Promise.reject(error)
    }
);

app.mount('#app')
