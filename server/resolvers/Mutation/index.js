import { merge } from 'lodash'

import UserMutation from './User'
import EventMutation from './Event'
import SpeakerMutation from './Speaker'

export default merge(UserMutation, EventMutation, SpeakerMutation)
