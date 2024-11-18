// @ts-check
import vercel from '@astrojs/vercel/static';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    output: 'static',
    integrations: [icon()],
    adapter: vercel(),
});
