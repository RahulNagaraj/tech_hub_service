import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

const DateResolver = {
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Custom Date Scalar Type',
		parseValue(value) {
			return new Date(value) // value from the client
		},
		serialize(value) {
			return value.getTime() // value sent to the client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(ast.kind) // ast value is always in string format
			}
			return null
		},
	}),
}

export default DateResolver.Date
