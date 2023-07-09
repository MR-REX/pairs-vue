import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faMoon,
    faSun,
    faVolumeMute,
    faVolumeHigh,
    faArrowRotateRight,
    faCaretLeft,
    faCaretRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faMoon,
    faSun,
    faVolumeMute,
    faVolumeHigh,
    faArrowRotateRight,
    faCaretLeft,
    faCaretRight
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');