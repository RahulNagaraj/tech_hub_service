import { merge } from 'lodash'

import UserMutation from './User'
import EventMutation from './Event'

export default merge(UserMutation, EventMutation)
