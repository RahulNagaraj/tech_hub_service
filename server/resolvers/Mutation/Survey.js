import { Survey } from '../../models/Survey'

const addSurvey = async (_, { survey }) => {
	const newSurvey = new Survey(survey)
	await newSurvey.save()
	return newSurvey
}

export default {
	addSurvey,
}
