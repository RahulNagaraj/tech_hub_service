import { Survey } from '../../models/Survey'

const getSurveys = async (_) => {
	const surveys = await Survey.find({})
	return surveys
}

const getSurvey = async (_, { id }) => {
	const survey = await Survey.findById(id)
	return survey
}

export default {
	getSurveys,
	getSurvey,
}
