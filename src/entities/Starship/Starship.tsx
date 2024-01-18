import { transformLongDateInHours } from '@/shared/lib/utils'

export type StarshipProps = {
	name: string
	model: string
	manufacturer: string
	costInCredits: string
	length: string
	maxAtmospheringSpeed: string
	crew: string
	passengers: string
	cargoCapacity: string
	consumables: string
	hyperdriveRating: string
	MGLT: number
	starshipClass: string
}

export class Starship {
	get name() {
		return this.props.name.toString()
	}

	get model() {
		return this.props.model.toString()
	}

	get manufacturer() {
		return this.props.manufacturer.toString()
	}

	get costInCredits() {
		return this.props.costInCredits.toString()
	}

	get length() {
		return this.props.length.toString()
	}

	get maxAtmospheringSpeed() {
		return this.props.maxAtmospheringSpeed.toString()
	}

	get crew() {
		return this.props.crew.toString()
	}

	get passengers() {
		return this.props.passengers.toString()
	}

	get cargoCapacity() {
		return this.props.cargoCapacity.toString()
	}

	get consumables() {
		return this.props.consumables.toString()
	}

	get hyperdriveRating() {
		return this.props.hyperdriveRating.toString()
	}

	get MGLT() {
		return this.props.MGLT
	}

	get starshipClass() {
		return this.props.starshipClass.toString()
	}

	calculateStopsByDistance(distance: number) {
		const hoursAutonomy = transformLongDateInHours(this.consumables)
		const distanceWithoutStopping = this.MGLT * hoursAutonomy
		const stopsCount = distance / distanceWithoutStopping || 0

		return Math.floor(stopsCount)
	}

	constructor(private readonly props: StarshipProps) {}
}
