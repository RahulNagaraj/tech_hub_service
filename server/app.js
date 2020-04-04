import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

const databaseUrl = 'mongodb://localhost:27017/tech_hub'

const connect = mongoose.connect(databaseUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
connect
	.then(db => console.log('Connected successfully to Mongo'))
	.catch(err => {
		throw Error(`Unable to connect to MongoDB ${err}`)
	})

const typeDefs = `
	type Query {
		info: String!
	}
`

const resolvers = {
	Query: {
		info: () => `This is info query`,
	},
}

const server = new GraphQLServer({
	typeDefs,
	resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))
