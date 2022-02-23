import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'  
import 'bootstrap/dist/css/bootstrap.css'



import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



library.add(faPhone);
library.add(faUmbrella);
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
