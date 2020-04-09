import { merge } from 'lodash'

import UserQuery from './User'
import EventQuery from './Event'
import SpeakerQuery from './Speaker'
import SurveyQuery from './Survey'
import ResponseQuery from './Response'

export default merge(
	UserQuery,
	EventQuery,
	SpeakerQuery,
	SurveyQuery,
	ResponseQuery
)
