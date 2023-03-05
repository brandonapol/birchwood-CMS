import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createAuth0, Auth0VueClientOptions } from '@auth0/auth0-vue'
import router from './router/router'

interface ClientAuth extends Auth0VueClientOptions {
    redirect_uri: any;
}

const options: ClientAuth = {
    domain: "dev-626lcx07uwy8kjn5.us.auth0.com",
    clientId: "SKPxrOE9dTea8U2zNFczclicNGzPg6Jw",
    redirect_uri: window.location.origin
}

const app = createApp(App)

app.use(router)

app.use(
    createAuth0(options)
);

app.mount('#app')
