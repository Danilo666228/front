'use client'

import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import styles from './Auth.module.scss'

import { Button } from '@/components/ui/Button'

import { SERVER_URL } from '@/config/api.config'

export function Social() {
	const router = useRouter()

	return (
		<div className={styles.social}>
			<Button
				variant={'outline'}
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>
			<Button
				variant={'outline'}
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}
