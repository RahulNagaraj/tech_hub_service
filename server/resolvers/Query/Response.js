import { Response } from '../../models/Response'

const getResponseBySurveyId = async (_, { id }) => {
	const response = await Response.find({ survey_id: id })
	return response
}

const getResponseByQuestionId = async (_, { id }) => {
	const response = await Response.find({ question_id: id })
	return response
}

const calculateVotes = async () => {}

export default {
	getResponseByQuestionId,
	getResponseBySurveyId,
}
