export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => `${SERVER_URL}/auth${url}`,
	users: (url = '') => `${SERVER_URL}/users${url}`,
	stores: (url = '') => `${SERVER_URL}/stores${url}`,
	products: (url = '') => `${SERVER_URL}/products${url}`,
	categories: (url = '') => `${SERVER_URL}/categories${url}`,
	colors: (url = '') => `${SERVER_URL}/colors${url}`,
	statistics: (url = '') => `${SERVER_URL}/statistics${url}`,
	reviews: (url = '') => `${SERVER_URL}/reviews${url}`,
	orders: (url = '') => `${SERVER_URL}/orders${url}`,
	files: (url = '') => `${SERVER_URL}/files${url}`
}
