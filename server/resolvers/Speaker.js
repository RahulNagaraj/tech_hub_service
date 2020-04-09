import { Event } from '../models/Event'

const SpeakerResolver = {
	events: ({ events: eventIds }) => {
		return eventIds.map((event) => Event.findById(event))
	},
}

export default SpeakerResolver
