import { Starship } from '@/entities/Starship'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/components/ui'

type StarshipItemProps = {
	starship: Starship
	distance: number
}

const StarshipItem = ({ starship, distance }: StarshipItemProps) => {
	return (
		<Card key={starship.name}>
			<CardHeader className="flex justify-between sm:flex-row sm:items-center sm:gap-8">
				<div className="mt-2.5">
					<CardTitle>{starship.name}</CardTitle>
					<CardDescription>{starship.model}</CardDescription>
				</div>
				<div>
					<span className="font-bold text-lg">
						{starship.calculateStopsByDistance(distance)}
					</span>{' '}
					paradas
				</div>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col md:flex-row md:items-center">
					<div className="flex md:flex-row md:items-center">
						<p className="text-sm font-semibold text-muted-foreground">MGLT:</p>
						<p className="text-sm text-muted-foreground ml-2">
							{starship.MGLT ? `${starship.MGLT}/h` : 'Indisponível'}
						</p>
					</div>

					<div className="flex md:flex-row md:items-center md:ml-4">
						<p className="text-sm font-semibold text-muted-foreground">
							Autonomia:
						</p>
						<p className="text-sm text-muted-foreground ml-2">
							{starship.consumables}
						</p>
					</div>

					<div className="flex md:flex-row md:items-center md:ml-4">
						<p className="text-sm font-semibold text-muted-foreground">
							Passageiros:
						</p>
						<p className="text-sm text-muted-foreground ml-2">
							{starship.passengers}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export { StarshipItem }
