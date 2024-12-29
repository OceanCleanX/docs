// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OceanCleanX',
			social: {
				github: 'https://github.com/OceanCleanX',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
