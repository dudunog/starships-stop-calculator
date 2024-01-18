import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/app/Providers'
import { cn } from '@/shared/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Starships stop calculator',
	description: 'Starships stop calculator',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn(inter.className, 'w-full flex justify-center')}>
				<Providers>
					<div className="mt-8 max-w-7xl px-4 w-full flex flex-col items-center">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
