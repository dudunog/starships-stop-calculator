import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import moment from 'moment'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const transformLongDateInHours = (date: string): number => {
	const [number, unit] = date.split(' ')
	const consumablesInHours = moment
		.duration(number, unit as moment.unitOfTime.DurationConstructor)
		.asHours()
	return consumablesInHours
}
