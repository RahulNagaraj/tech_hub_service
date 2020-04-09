import { merge } from 'lodash'

import UserMutation from './User'
import EventMutation from './Event'
import SpeakerMutation from './Speaker'
import SurveyMutation from './Survey'
import ResponseMutation from './Response'

export default merge(
	UserMutation,
	EventMutation,
	SpeakerMutation,
	SurveyMutation,
	ResponseMutation
)
