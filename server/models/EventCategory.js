import mongoose from 'mongoose'

const Schema = mongoose.Schema
const eventCategorySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const EventCategory = mongoose.model('EventCategory', eventCategorySchema)
export { EventCategory, eventCategorySchema }
