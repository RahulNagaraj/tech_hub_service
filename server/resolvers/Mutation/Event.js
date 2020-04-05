import { Event } from '../../models/Event'

const addEvent = async (
	_,
	{
		title,
		description,
		short_description,
		location_details,
		date,
		start_time,
		end_time,
		days,
		keyHighlights,
		speakers,
		image_url,
		topics,
		category,
	}
) => {
	const event = new Event({
		title,
		description,
		short_description,
		location_details,
		date,
		start_time,
		end_time,
		days,
		keyHighlights,
		speakers,
		image_url,
		topics,
		category,
	})

	await event.save()
	return event
}

export default {
	addEvent,
}
