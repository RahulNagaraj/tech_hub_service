import mongoose from 'mongoose'

const Schema = mongoose.Schema
const keyHighlightSchema = new Schema(
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
			type: String,
			required: true,
		},
		place: {
			type: String,
			required: true,
		},
		start_time: {
			type: Date,
			required: true,
		},
		end_time: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const KeyHighlight = mongoose.model('KeyHighlight', keyHighlightSchema)
export { KeyHighlight, keyHighlightSchema }
