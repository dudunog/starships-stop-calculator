import { Fragment } from 'react'
import { StarshipItem } from '@/app/components/starship-item'
import { Starship } from '@/entities/Starship'
import { DEFAULT_PAGINATION_PAGE_SIZE } from '@/constants'
import { Pagination } from '@/shared/components/pagination'

type StarshipsListProps = {
	starships: Starship[]
	isLoading: boolean
	distance: number
	currentPage: number
	totalItems: number
	onPageChange: (page: number) => void
}

const StarshipsList = ({
	starships,
	isLoading,
	distance,
	currentPage,
	totalItems,
	onPageChange,
}: StarshipsListProps) => {
	return (
		<Fragment>
			<div className="mt-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
				{false ? (
					<div>Carregando...</div>
				) : (
					starships?.map(starship => (
						<StarshipItem
							key={starship.name}
							starship={starship}
							distance={distance}
						/>
					))
				)}
			</div>

			{starships && starships.length > 0 && !isLoading && (
				<Pagination
					currentPage={currentPage}
					registersPerPage={DEFAULT_PAGINATION_PAGE_SIZE}
					totalCountOfRegisters={totalItems}
					onPageChange={onPageChange}
				/>
			)}

			{starships?.length === 0 && (
				<div className="flex flex-col items-center max-w-[40rem] max-h-[30rem]">
					<p className="text-minimal text-lg">
						Não há espaçonaves para serem listadas
					</p>
				</div>
			)}
		</Fragment>
	)
}

export { StarshipsList }
