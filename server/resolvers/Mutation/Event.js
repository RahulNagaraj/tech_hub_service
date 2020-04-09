import { Event } from '../../models/Event'

const addEvent = async (_, { event }) => {
	const newEvent = new Event(event)
	await newEvent.save()
	return newEvent
}

export default {
	addEvent,
}
