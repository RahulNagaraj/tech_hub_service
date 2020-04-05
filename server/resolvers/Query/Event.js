import { Event } from '../../models/Event'

const getEvent = async (_, { id }) => {
	const event = await Event.findById(id)
	return event
}

const getEvents = async (_) => {
	const events = await Event.find({})
	return events
}

export default {
	getEvent,
	getEvents,
}
