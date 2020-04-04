import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import { isEmpty } from 'lodash'
import { typeDefs } from './schema'
import { User } from './models/User'

mongoose
	.connect('mongodb://localhost:27017/tech_hub', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.info('Successfully connected to Tech Hub'))
	.catch((error) => {
		throw new Error('Unable to connect to Tech Hub')
	})

const resolvers = {
	Query: {
		info: () => 'Hello World',
		getUsers: () => User.find(),
		getUser: async (_, { id }) => {
			var result = await User.findById(id)
			return result
		},
	},
	Mutation: {
		addUser: async (
			_,
			{
				first_name,
				last_name,
				email,
				sso,
				liked_events,
				interested_topics,
				roles,
			}
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
		},
		deleteUser: async (_, { id }) => {
			const user = await User.findByIdAndDelete(id)
			return user
		},
		likeEvent: async (_, { userId, eventId }) => {
			const user = await User.findById(userId)
			const alreadyLiked = isEmpty(
				user.liked_events.filter((event) => event === eventId)
			)
			let { updatedLikedEvents } = user.liked_events
			if (!alreadyLiked) {
				updatedLikedEvents = user.liked_events.filter(
					(event) => event !== eventId
				)
			} else {
				updatedLikedEvents = user.liked_events.concat(eventId)
			}
			user.liked_events = updatedLikedEvents
			await user.save()
			return user
		},
		upsertInterestedTopics: async (_, { id, topics }) => {
			const user = await User.findById(id)
			user.interested_topics = topics
			user.save()
			return user
		},
	},
}

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function () {
	const serverOptions = {
		endpoint: '/graphql',
		playground: '/playground',
		cors: {
			origin: '*/*',
		},
	}
	server.start(serverOptions, ({ port }) => {
		console.log(
			`Server started, listening on port ${port} for incoming requests.`
		)
	})
})
