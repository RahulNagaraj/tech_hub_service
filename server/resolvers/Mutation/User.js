import mongoose from 'mongoose'
import { isEmpty, isEqual } from 'lodash'

import { User } from '../../models/User'
import { Event } from '../../models/Event'

const addUser = async (_, { user }) => {
	const newUser = new User(user)
	await newUser.save()
	return newUser
}

const deleteUser = async (_, { id }) => {
	const user = await User.findByIdAndDelete(id)
	return user
}

const likeEvent = async (_, { userId, eventId }) => {
	const user = await User.findById(userId)
	const event = await Event.findById(eventId)

	const alreadyLiked = user.liked_events.filter((event) =>
		isEqual(event, mongoose.Types.ObjectId(eventId))
	)
	let { updatedLikedEvents } = user.liked_events
	if (alreadyLiked && alreadyLiked.length > 0) {
		updatedLikedEvents = user.liked_events.filter(
			(event) => !isEqual(event, mongoose.Types.ObjectId(eventId))
		)
		await event.update({ $inc: { likes: -1 } })
	} else {
		updatedLikedEvents = user.liked_events.concat(eventId)
		await event.update({ $inc: { likes: 1 } })
	}
	user.liked_events = updatedLikedEvents
	await user.save()
	return user
}

const updateInterestedTopics = async (_, { id, topics }) => {
	const updatedUser = await User.findOneAndUpdate(
		{ _id: id },
		{ interested_topics: topics },
		{ new: true }
	)
	return updatedUser
}

export default {
	addUser,
	deleteUser,
	likeEvent,
	updateInterestedTopics,
}
