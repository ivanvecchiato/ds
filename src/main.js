import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App);

import IButton from '@/components/IButton.vue'
import ITable from '@/components/ITable.vue'

app.component('IButton', IButton)
app.component('ITable', ITable)

app.use(router).mount('#app')
