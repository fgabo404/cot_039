import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

import {Amplify, Auth} from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

Amplify.configure({
    API: {
      graphql_headers: async () => {
        const session = await Auth.currentSession();
        return {
          Authorization: session.getIdToken().getJwtToken(),
        };
      },
    },
    
  });

createApp(App).use(store).use(router).use(VueSplide).mount('#app')