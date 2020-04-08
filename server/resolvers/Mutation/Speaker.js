import { Speaker } from '../../models/Speaker'

const addSpeaker = async (_, { speaker }) => {
	const newSpeaker = new Speaker(speaker)
	await newSpeaker.save()
	return newSpeaker
}

export default {
	addSpeaker,
}
