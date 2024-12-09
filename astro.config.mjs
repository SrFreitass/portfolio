// @ts-check
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    output: 'server',
    integrations: [icon(), react(), tailwind({
      applyBaseStyles: false,
    })],
    adapter: vercel(),
});
