'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { saveToken } from '@/services/auth/auth-token.service'

export function Dashboard() {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')
		if (accessToken) {
			saveToken(accessToken)
		}
	}, [searchParams])
	return <div>Dashboard</div>
}
