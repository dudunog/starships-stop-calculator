import {
	GetStarshipsAPIRequest,
	getStarships,
} from '@/shared/services/get-starships'
import { useMutation } from '@tanstack/react-query'

export function useGetStarships(params: GetStarshipsAPIRequest) {
	const { mutateAsync, isLoading, isSuccess, isError, error } = useMutation(
		async () => {
			const starships = getStarships.execute({
				page: params?.page || 1,
			})

			return starships
		},
		{
			mutationKey: getStarships.getCacheKey({
				currentPage: params?.page || 1,
			}),
			cacheTime: Infinity,
		},
	)

	return {
		getStarships: mutateAsync,
		isLoading,
		isSuccess,
		isError,
		error,
	}
}
