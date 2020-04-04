import mongoose from 'mongoose'

const Schema = mongoose.Schema
const locationDetailSchema = new Schema(
	{
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
	},
	{
		id: false,
		_id: false,
		skipVersioning: true,
		timestamps: false,
	}
)

const LocationDetail = mongoose.model('LocationDetail', locationDetailSchema)
export { LocationDetail, locationDetailSchema }
