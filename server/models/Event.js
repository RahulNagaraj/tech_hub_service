import mongoose from 'mongoose'

const Schema = mongoose.Schema
const eventSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
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
			id: false,
			_id: false,
			type: {
				name: {
					type: String,
					required: true,
				},
				address: {
					type: String,
					required: true,
				},
				city: {
					type: String,
					required: true,
				},
				country: {
					type: String,
					required: true,
				},
				country_short_code: {
					type: String,
					required: true,
				},
				direction: {
					type: String,
					required: true,
				},
				zip_code: {
					type: String,
					required: true,
				},
				image_url: {
					type: String,
					required: true,
				},
			},
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
			id: false,
			_id: false,
			type: [
				{
					first_name: {
						type: String,
						required: true,
					},
					last_name: {
						type: String,
						required: true,
					},
					avatar_url: {
						type: String,
						default: '',
					},
					topic: {
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
			],
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
		timestamps: true,
	}
)

const Event = mongoose.model('Event', eventSchema)
export { Event, eventSchema }
