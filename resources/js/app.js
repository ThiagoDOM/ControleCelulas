import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './icons';

import { MaskInput } from 'vue-3-mask';
import money from 'v-money3'

const appName = 'Controle de Células';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const VueApp = createApp({ render: () => h(App, props) });

        // VueApp.config.globalProperties.$beforeInstallPrompt = beforeInstallPrompt;

        return VueApp
            .component('font-awesome-icon', FontAwesomeIcon)
            .component('MaskInput', MaskInput)
            .use(money)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);

        return createApp({ render: () => h(App, props) })
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
