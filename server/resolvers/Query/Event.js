import { Event } from '../../models/Event'

const getEvent = async (_, { id }) => {
	const event = await Event.findById(id)
	return event
}

const getEvents = async (_) => {
	const events = await Event.find({})
	return events
}

const getEventsByLocation = async (_, { city }) => {
	const events = await Event.find({ 'location_details.city': city })
	return events
}

const getEventsByCategory = async (_, { name }) => {
	const events = await Event.find({ category: name })
	return events
}

const getEventsByTitle = async (_, { input }) => {
	const events = await Event.find({ $text: { $search: `"${input}"` } })
	return events
}

export default {
	getEvent,
	getEvents,
	getEventsByLocation,
	getEventsByCategory,
	getEventsByTitle,
}
