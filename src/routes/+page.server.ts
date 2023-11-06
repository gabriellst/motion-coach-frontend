import { ApiGateway } from '$lib/images/apiGateway.js'

export const actions = {
	default: async ({ request }) => {
		const apiGateway = new ApiGateway()
		const data = await request.formData()
		const video = data.get('video') as File

		if (!video) return new Response('No video provided', { status: 400 })

		const values = await apiGateway.analyze(video)

		return values
	},
}
