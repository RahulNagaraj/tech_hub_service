import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import typeDefs from './schema.graphql'
import resolvers from './resolvers'

mongoose
	.connect('mongodb://localhost:27017/tech_hub', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.info('Successfully connected to Tech Hub'))
	.catch((error) => {
		throw new Error('Unable to connect to Tech Hub')
	})

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
