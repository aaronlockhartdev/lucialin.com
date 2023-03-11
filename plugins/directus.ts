import { Directus } from '@directus/sdk'
// const directus = new Directus(process.env.DIRECTUS_HOST)
const directus = new Directus("http://localhost:8055")

export default defineNuxtPlugin(() => {
	return {
		provide: { directus },
	}
})
