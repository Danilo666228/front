import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constans'

import { Store } from './Store'

export const metadata: Metadata = {
	title: 'Магазин',
	...NO_INDEX_PAGE
}
export default function StorePage() {
	return <Store />
}
