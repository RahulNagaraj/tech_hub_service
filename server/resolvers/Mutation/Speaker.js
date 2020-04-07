import { Speaker } from '../../models/Speaker'

const addSpeaker = async (
	_,
	{ first_name, last_name, email, avatar_url, topics, hobbies, events }
) => {
	const speaker = new Speaker({
		first_name,
		last_name,
		email,
		avatar_url,
		topics,
		hobbies,
		events,
	})
	await speaker.save()
	return speaker
}

export default {
	addSpeaker,
}
