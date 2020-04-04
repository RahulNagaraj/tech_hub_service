import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import { typeDefs } from './schema'
import { User } from './models/user'

mongoose.connect('mongodb://localhost:27017/tech_hub', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
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
	},
}

const server = new GraphQLServer({ typeDefs, resolvers })
mongoose.connection.once('open', function () {
	server.start(() => console.log('Server is running on localhost:4000'))
})
