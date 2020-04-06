import { isEqual } from 'lodash'

import { Speaker } from '../models/Speaker'

const EventResolver = {
	speakers: async ({ _id }) => {
		const speakers = await Speaker.find({})
		return speakers.filter((speaker) => {
			for (let eventId of speaker.events) {
				if (isEqual(eventId, _id)) return true
			}
		})
	},
}

export default EventResolver
