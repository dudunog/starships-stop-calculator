'use client'

import { useEffect, useState } from 'react'
import { Starship } from '@/entities/Starship'
import { InputSection } from '@/app/components/input-section'
import { StarshipsList } from '@/app/components/starships-list'
import { useGetStarships } from '@/shared/hooks/use-get-starships'

export default function Home() {
	const [distance, setDistance] = useState<Number | undefined>(undefined)
	const [starships, setStarships] = useState<Starship[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalItems, setTotalItems] = useState(1)

	const { getStarships, isLoading } = useGetStarships({
		page: currentPage,
	})

	const handleCalculateStops = async (value: number) => {
		setDistance(value)
		await getStarshipsData()
	}

	const getStarshipsData = async () => {
		const response = await getStarships()

		setStarships(response.data)
		setTotalItems(response.count)
	}

	useEffect(() => {
		getStarshipsData()
	}, [currentPage])

	return (
		<div className="lg:p-4">
			<InputSection
				isLoading={isLoading}
				onHandleCalculateStops={handleCalculateStops}
			/>

			<div className="mt-16 mb-8 max-w-7xl w-full flex flex-col w-full">
				<h2 className="text-2xl font-semibold tracking-tight">Espaçonaves</h2>
				<p className="text-sm text-muted-foreground">Lista de espaçonaves</p>

				<div className="mt-4">
					{starships.length > 0 || distance ? (
						<StarshipsList
							starships={starships}
							isLoading={isLoading}
							distance={Number(distance)}
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							totalItems={totalItems}
						/>
					) : (
						<div className="mt-4">
							Primeiro digite uma distância para exibirmos as espaçonaves
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
