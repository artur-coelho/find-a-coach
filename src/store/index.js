import { createStore } from 'vuex';

import coachesModule from './coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
