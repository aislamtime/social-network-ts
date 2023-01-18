import axios from 'axios'
import { UserType } from '../redux/reducers/users-reduser'

const apiURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
	withCredentials: true,
	baseURL: apiURL,
	headers: { 'API-KEY': '53aeea98-f6b5-4e36-a084-68902275c709' },
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`).then((responce) => responce.data)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`).then((responce) => responce.data)
	},
}
