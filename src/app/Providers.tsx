'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
})

type ProvidersType = {
	children: React.ReactNode
}

export default function Providers({ children }: ProvidersType) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
