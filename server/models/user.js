import mongoose from 'mongoose'

const Schema = mongoose.Schema
const userSchema = new Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		sso: {
			type: Number,
			required: true,
		},
		liked_events: {
			type: Array,
			required: false,
			default: [],
		},
		interested_topics: {
			type: Array,
			of: String,
			required: false,
			default: [],
		},
		roles: {
			type: Array,
			required: false,
			default: ['user'],
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)
export { User, userSchema }
