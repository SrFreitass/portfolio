// @ts-check
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    output: 'server',
    integrations: [icon()],
    adapter: vercel(),
});
