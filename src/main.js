import { createApp } from 'vue';

import router from './router.js';

const app = createApp().mount('#app');
app.use(router);
