import { groupBy, maxBy } from 'lodash'

import { Response } from '../../models/Response'

const getResponseBySurveyId = async (_, { survey_id }) => {
	const response = await Response.find({ survey_id })
	return response
}

const getResponseByQuestionId = async (_, { question_id }) => {
	const response = await Response.find({ question_id })
	return response
}

const calculateVotesByQuestion = async (_, { question_id }) => {
	const response = await getResponseByQuestionId(_, { question_id })
	const userCount = await Response.aggregate([
		{ $group: { _id: '$user_id' } },
		{ $count: 'user_id' },
	])

	// Group by response
	const res = groupBy(response, 'response')

	// Convert into frequency table
	const frequencyTable = Object.keys(res).map((freq) => ({
		option: freq,
		count: res[freq].length,
	}))

	// Calculate the max vote
	const winner = maxBy(frequencyTable, (freq) => freq.count)

	// TODO: Handle equal votes. Default -> alphabetical

	return [
		{
			question_id,
			users_count: userCount[0].user_id,
			votes: obj,
			winner: winner.option,
		},
	]
}

const calculateVotesBySurvey = async (_, { survey_id }) => {}

export default {
	getResponseByQuestionId,
	getResponseBySurveyId,
	calculateVotesByQuestion,
	calculateVotesBySurvey,
}
