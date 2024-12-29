// @ts-check
import react from '@astrojs/react';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true
    },
    integrations: [icon(), react(), tailwind({
      applyBaseStyles: false,
    })],
});
