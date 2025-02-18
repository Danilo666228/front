import Cookie from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookie.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}
export const saveToken = (accessToken: string) => {
	Cookie.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}
export const removeToken = () => {
	Cookie.remove(EnumTokens.ACCESS_TOKEN)
}
