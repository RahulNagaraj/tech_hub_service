import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import { merge } from 'lodash'

import { typeDefs } from './schema'
import UserQuery from './resolvers/User/Query'
import UserMutation from './resolvers/User/Mutation'

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
	Query: merge(UserQuery),
	Mutation: merge(UserMutation),
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
