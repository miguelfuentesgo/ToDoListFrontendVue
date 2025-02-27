import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  router  from '@/router'
import '@/styles/main.scss'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//  Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

// Importar todas las librerías necesarias de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'

// Importar todos los iconos
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


// Add each icon globally
library.add(fas, far, fab)

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

//For state management
app.use(pinia)

//For route management
app.use(router)

//For UI Components
app.use(vuetify)

// For icons
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
