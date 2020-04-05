import { merge } from 'lodash'

import UserQuery from './User'
import EventQuery from './Event'

export default merge(UserQuery, EventQuery)
