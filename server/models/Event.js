import mongoose from 'mongoose'

import { EventCategory } from './EventCategory'
import { Speaker } from './Speaker'
import { KeyHighlight } from './KeyHighlight'
import { LocationDetail } from './LocationDetail'

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
		// location_detail: {
		// 	type: LocationDetail,
		// 	required: true,
		// },
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
		no_of_days: {
			type: Number,
			required: true,
		},
		users_liked: {
			type: [String],
			default: [],
		},
		// keyHighlights: {
		// 	type: [KeyHighlight],
		// 	required: true,
		// },
		// speakers: {
		// 	type: [Speaker],
		// 	required: true,
		// },
		agenda: {
			type: [String],
			required: true,
		},
		votes: {
			type: [String],
			default: [],
		},
		questions: {
			type: [String],
			required: true,
		},
		image_url: {
			type: String,
			required: true,
		},
		topics: {
			type: [String],
			required: true,
		},
		// category: {
		// 	type: [EventCategory],
		// 	required: true,
		// },
	},
	{
		skipVersioning: true,
		timestamps: true,
	}
)

const Event = mongoose.model('Event', eventSchema)
export { Event, eventSchema }
