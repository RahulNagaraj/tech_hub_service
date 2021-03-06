import mongoose from 'mongoose'

const Schema = mongoose.Schema

const responseSchema = new Schema({
	survey_id: {
		type: Schema.ObjectId,
		required: true,
	},
	question_id: {
		type: Schema.ObjectId,
		required: true,
	},
	user_id: {
		type: Schema.ObjectId,
		required: true,
	},
	response: {
		type: String,
		required: true,
	},
})

const Response = mongoose.model('Response', responseSchema)
export { Response, responseSchema }
