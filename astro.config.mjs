// @ts-check
import {defineConfig} from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://joeltapia.com',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [icon({
        include: {
            ri: ['*'],
            simpleIcons: ['*'],
            vscodeIcons: ['*'],
            devicon: ['*'],
            fontisto: ['*'],
        },
    })]
});