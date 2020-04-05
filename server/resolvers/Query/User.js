import { User } from '../../models/User'

const getUsers = () => User.find()

const getUser = async (_, { id }) => {
	var result = await User.findById(id)
	return result
}

export default { getUser, getUsers }
