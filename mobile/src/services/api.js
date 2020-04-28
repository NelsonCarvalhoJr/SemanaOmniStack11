import axios from 'axios'

const api = axios.create({
	baseURL: '<ip_backend>',
})

export default api