// @ts-check
import {defineConfig} from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://joeltapia.com',
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