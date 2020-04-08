import mongoose from 'mongoose'

const Schema = mongoose.Schema
const speakerSchema = new Schema(
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
		avatar_url: {
			type: String,
			default: '',
		},
		topics: {
			type: [String],
			required: true,
		},
		hobbies: {
			type: [String],
			default: [],
		},
		events: {
			type: [Object],
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
)

const Speaker = mongoose.model('Speaker', speakerSchema)
export { Speaker, speakerSchema }
