import { isEmpty } from 'lodash'

import { User } from '../../models/User'
import { Event } from '../../models/Event'

const addUser = async (
	_,
	{ first_name, last_name, email, sso, liked_events, interested_topics, roles }
) => {
	const user = new User({
		first_name,
		last_name,
		email,
		sso,
		liked_events,
		interested_topics,
		roles,
	})
	await user.save()
	return user
}

const deleteUser = async (_, { id }) => {
	const user = await User.findByIdAndDelete(id)
	return user
}

const likeEvent = async (_, { userId, eventId }) => {
	const user = await User.findById(userId)
	const event = await Event.findById(eventId)

	const alreadyLiked = isEmpty(
		user.liked_events.filter((event) => event === eventId)
	)
	let { updatedLikedEvents } = user.liked_events
	if (!alreadyLiked) {
		updatedLikedEvents = user.liked_events.filter((event) => event !== eventId)
		await event.update({ $inc: { likes: -1 } })
	} else {
		updatedLikedEvents = user.liked_events.concat(eventId)
		await event.update({ $inc: { likes: 1 } })
	}
	user.liked_events = updatedLikedEvents
	await user.save()
	return user
}

const upsertInterestedTopics = async (_, { id, topics }) => {
	const user = await User.findById(id)
	user.interested_topics = topics
	user.save()
	return user
}

export default {
	addUser,
	deleteUser,
	likeEvent,
	upsertInterestedTopics,
}
