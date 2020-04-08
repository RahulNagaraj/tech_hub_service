import mongoose from 'mongoose'
import { includes } from 'lodash'

const Schema = mongoose.Schema

const listOptionSchema = new Schema({
	label: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: true,
	},
	sub_title: {
		type: String,
	},
	avatar: {
		type: String,
		required: () => this.show_avatar,
	},
	info_icon: {
		type: Boolean,
		default: false,
	},
	info_text: {
		type: String,
		required: () => this.info_icon,
	},
})

const ratingOptionSchema = new Schema({
	label: {
		type: String,
		required: true,
	},
	info_icon: {
		type: Boolean,
		default: false,
	},
	info_text: {
		type: String,
		required: () => this.info_icon,
	},
})

const listSchema = new Schema({
	options: [listOptionSchema],
	show_avatar: {
		type: Boolean,
		default: false,
	},
})

const ratingSchema = new Schema({
	options: ratingOptionSchema,
	scale: {
		type: Number,
		default: 5,
		max: 10,
	},
	icon: {
		type: String,
		enum: ['star', 'like', 'thumbsup'],
		default: 'star',
	},
})

const inputSchema = new Schema({
	type: {
		type: String,
		enum: ['text', 'number'],
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	max_length: {
		type: Number,
	},
	min_length: {
		type: Number,
	},
})

const ruleSchema = new Schema({
	input_type: {
		type: String,
		enum: ['input', 'list', 'rating'],
		required: true,
	},
	list_rule: {
		id: false,
		_id: false,
		type: listSchema,
		required: () => this.input_type === 'list',
	},
	rating_rule: {
		id: false,
		_id: false,
		type: ratingSchema,
		required: () => this.input_type === 'rating',
	},
	input_rule: {
		id: false,
		_id: false,
		type: inputSchema,
		required: () => includes(['input'], this.input_type),
	},
	required: {
		type: Boolean,
		default: true,
		required: true,
	},
})

const questionSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	sub_title: {
		type: String,
	},
	name: {
		type: String,
		required: true,
	},
	rules: {
		id: false,
		_id: false,
		type: ruleSchema,
		required: true,
	},
})

const surveySchema = new Schema(
	{
		event_id: {
			type: Schema.ObjectId,
			required: true,
			unique: true,
		},
		title: {
			type: String,
			required: true,
		},
		questions: {
			type: questionSchema,
			required: true,
		},
		active: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Survey = mongoose.model('Survey', surveySchema)
export { Survey, surveySchema }
