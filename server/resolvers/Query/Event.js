import { Event } from '../../models/Event'

const getEvent = async (_, { id }) => {
	const result = await Event.findById(id)
	return result
}

export default {
	getEvent,
}
