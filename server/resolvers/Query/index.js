import { merge } from 'lodash'

import UserQuery from './User'
import EventQuery from './Event'
import SpeakerQuery from './Speaker'

export default merge(UserQuery, EventQuery, SpeakerQuery)
