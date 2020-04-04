const typeDefs = `
	type User {
		id: ID!
		first_name: String!
		last_name: String
		email: String!
		sso: Int!
		liked_events: [String]!
		interested_topics: [String]!
		roles: [String!]!
	}
	
	type Query {
		info: String!
		getUser(id: ID!): User
		getUsers: [User]!
	}

	type Mutation {
		addUser(first_name: String!, last_name: String!, email: String!, sso: Int!): User!
		deleteUser(id: ID!): User!
		likeEvent(userId: ID!, eventId: ID!): User!
		upsertInterestedTopics(id: ID!, topics: [String]!): User!
	}
`
export { typeDefs }
