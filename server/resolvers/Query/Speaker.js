import { Speaker } from '../../models/Speaker'

const getSpeakers = async (_) => {
	const speakers = await Speaker.find({})
	return speakers
}

const getSpeaker = async (_, { id }) => {
	const speaker = await Speaker.findById(id)
	return speaker
}

export default {
	getSpeakers,
	getSpeaker,
}
