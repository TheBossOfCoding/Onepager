import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css:[
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.min.css',
        'primeicons/primeicons.css',
    ],
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
            }
        ],
        script: [
            {
              src: [
                "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
              ]
            },
          ]
    }
})
