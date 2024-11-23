import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constans'

import './globals.scss'
import { Providers } from './providers'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={nunito.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
