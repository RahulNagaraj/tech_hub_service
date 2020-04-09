import { Response } from '../../models/Response'

const addResponse = async (_, { response }) => {
	const newResponse = new Response(response)
	await newResponse.save()
	return newResponse
}

export default {
	addResponse,
}
