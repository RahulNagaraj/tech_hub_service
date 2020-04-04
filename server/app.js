import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import { typeDefs } from './schema'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

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
	Query,
	Mutation,
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
