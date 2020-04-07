import { User } from '../../models/User'

const getUsers = () => User.find()

const getUser = async (_, { id }) => {
	const user = await User.findById(id)
	return user
}

export default { getUser, getUsers }
