'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Social } from '@/app/auth/Social'

import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/Card'
import { Form } from '@/components/ui/Form-Elements/Form'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { useAuthForm } from './useAuthForm'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { form, isPending, onSubmit } = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image
					src={'/logo.svg'}
					alt='Логотип'
					width={100}
					height={100}
				/>
			</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle>
							{isReg ? 'Создать аккаунт' : 'Вход в аккаунт'}
						</CardTitle>
						<CardDescription>
							Войдите или создайте учетную запись, что оформлять
							покупки
						</CardDescription>
					</CardHeader>
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields
									form={form}
									isPending={isPending}
									isReg={isReg}
								/>
								<Button disabled={isPending}>Продолжить</Button>
							</form>
						</Form>
						<Social />
					</CardContent>
					<CardFooter className={styles.footer}>
						{isReg ? 'Уже есть аккаунт' : 'Ещё нет аккаунта?'}
						<Button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Войти' : 'Создать'}
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
