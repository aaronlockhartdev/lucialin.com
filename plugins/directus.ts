import { Directus } from '@directus/sdk';
const directus = new Directus(process.env.DIRECTUS_HOST);

export default defineNuxtPlugin(() => {
	return {
		provide: { directus },
	};
});
