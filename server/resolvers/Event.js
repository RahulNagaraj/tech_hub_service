import { Speaker } from '../models/Speaker'

const EventResolver = {
	speakers: ({ speakers: speakerIds }) => {
		return speakerIds.map((speaker) => Speaker.findById(speaker))
	},
}

export default EventResolver
