import { isEqual } from 'lodash'

import { Speaker } from '../models/Speaker'

const EventResolver = {
	speakers: async ({ _id }) => {
		const speakers = await Speaker.find({})
		return speakers.filter((speaker) => {
			for (let i of speaker.events) {
				if (isEqual(i, _id)) return true
				return false
			}
		})
	},
}

export default EventResolver
