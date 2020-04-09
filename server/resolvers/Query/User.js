import { User } from '../../models/User'

const getUsers = () => User.find()

const getUserById = async (_, { id }) => {
	const user = await User.findById(id)
	return user
}

const getUserBySso = async (_, { sso }) => {
	const user = await User.findOne({ sso })
	return user
}

export default { getUserById, getUsers, getUserBySso }
