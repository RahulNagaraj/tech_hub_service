import mongoose from 'mongoose'

const Schema = mongoose.Schema
const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		short_description: {
			type: String,
			default: '',
		},
		location_details: {
			type: Object,
			required: true,
		},
		date: {
			type: Date,
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
		days: {
			type: Number,
			required: true,
		},
		likes: {
			type: Number,
			default: 0,
		},
		keyHighlights: {
			type: [Object],
			required: true,
		},
		agenda: {
			type: [String],
		},
		votes: {
			type: [String],
			default: [],
		},
		questions: {
			type: [String],
		},
		image_url: {
			type: String,
			required: true,
		},
		topics: {
			type: [String],
			required: true,
		},
		category: {
			type: [String],
			required: true,
		},
	},
	{
		skipVersioning: true,
		timestamps: true,
	}
)

const Event = mongoose.model('Event', eventSchema)
export { Event, eventSchema }
