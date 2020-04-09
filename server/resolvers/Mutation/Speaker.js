import { Speaker } from '../../models/Speaker'

const addSpeaker = async (_, { speaker }) => {
	const newSpeaker = new Speaker(speaker)
	await newSpeaker.save()
	return newSpeaker
}

const addEventToSpeaker = async (_, { speaker_id, event_id }) => {
	const updatedSpeaker = await Speaker.findByIdAndUpdate(
		speaker_id,
		{ $addToSet: { events: event_id } },
		{ new: true }
	)
	return updatedSpeaker
}

const updateHobbies = async (_, { speaker_id, hobbies }) => {
	const updatedSpeaker = await Speaker.findByIdAndUpdate(
		speaker_id,
		{ $set: { hobbies } },
		{ new: true }
	)
	return updatedSpeaker
}

export default {
	addSpeaker,
	addEventToSpeaker,
	updateHobbies,
}
