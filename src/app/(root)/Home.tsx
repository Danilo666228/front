'use client'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

export function Home() {
	const router = useRouter()

	return (
		<>
			<div>Home</div>
			<Button onClick={() => router.replace(PUBLIC_URL.auth())}>
				Войти в аккаунт
			</Button>
		</>
	)
}
