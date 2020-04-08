import mongoose from 'mongoose'

const Schema = mongoose.Schema

const locationSchema = new Schema({
	type: {
		type: String,
		enum: ['Point'],
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
})

const contactSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: [Number],
	},
	mobile: {
		type: [Number],
	},
})

const locationDetailSchema = new Schema({
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
	location: locationSchema,
	zip_code: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	contact_information: {
		id: false,
		_id: false,
		type: contactSchema,
		required: true,
	},
})

const keyHighlightSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	avatar: {
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
})

const organizerSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	contact_information: {
		_id: false,
		id: false,
		type: contactSchema,
		required: true,
	},
})

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
			type: locationDetailSchema,
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
			min: 0,
		},
		keyHighlights: {
			id: false,
			_id: false,
			type: [keyHighlightSchema],
			rquired: true,
		},
		speakers: {
			type: [Schema.ObjectId],
			required: true,
			unique: true,
		},
		image: {
			type: String,
			required: true,
		},
		topics: {
			type: [String],
			required: true,
			unique: true,
		},
		category: {
			enum: ['Events', 'Birthdays', 'Volunteering'],
			type: String,
			required: true,
		},
		organizers: {
			type: organizerSchema,
			required: true,
			default: [],
		},
	},
	{
		timestamps: true,
	}
)

const Event = mongoose.model('Event', eventSchema)
export { Event, eventSchema }
