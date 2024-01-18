import { BaseApiResponse, ApiService } from '@/shared/core'
import { Starship } from '@/entities/Starship'
import { httpClient } from '@/infra'

export type GetStarshipsAPIRequest = {
	page?: number
}

export type GetStarshipsAPIResponse = BaseApiResponse<
	{
		name: string
		model: string
		manufacturer: string
		cost_in_credits: string
		length: string
		max_atmosphering_speed: string
		crew: string
		passengers: string
		cargo_capacity: string
		consumables: string
		hyperdrive_rating: string
		MGLT: string
		starship_class: string
	}[]
>

export type GetStarshipsDTO = Starship

type GetStarshipsResponse = Promise<{
	count: number
	data: GetStarshipsDTO[]
}>

export const getStarships = new ApiService<
	GetStarshipsAPIRequest,
	GetStarshipsResponse
>({
	cacheKey: 'starships',
	handler: async params => {
		const { data } = await httpClient.get<GetStarshipsAPIResponse>(
			`/starships?page=${params.page}`,
		)

		return {
			count: data.count,
			data: data?.results?.map(
				starship =>
					new Starship({
						name: starship.name,
						model: starship.model,
						manufacturer: starship.manufacturer,
						costInCredits: starship.cost_in_credits,
						length: starship.length,
						maxAtmospheringSpeed: starship.max_atmosphering_speed,
						crew: starship.crew,
						passengers: starship.passengers,
						cargoCapacity: starship.cargo_capacity,
						consumables: starship.consumables,
						hyperdriveRating: starship.hyperdrive_rating,
						MGLT: Number(starship.MGLT),
						starshipClass: starship.starship_class,
					}),
			),
		}
	},
})
