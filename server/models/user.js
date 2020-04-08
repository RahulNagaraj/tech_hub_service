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
			unique: true,
		},
		sso: {
			type: Number,
			required: true,
			unique: true,
		},
		liked_events: {
			type: [Schema.ObjectId],
			required: false,
			default: [],
		},
		interested_topics: {
			type: [String],
			required: false,
			default: [],
		},
		roles: {
			enum: ['user', 'admin'],
			type: [String],
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
