'use client'

import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { Button, Input, Label, Spinner } from '@/shared/components/ui'

type InputSectionProps = {
	isLoading: boolean
	onHandleCalculateStops: (value: number) => void
}

const InputSection = ({
	isLoading,
	onHandleCalculateStops,
}: InputSectionProps) => {
	const [distance, setDistance] = useState<Number | undefined>(undefined)

	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Calculadora de paradas de espaçonaves
				</h1>
				<p className="text-sm text-muted-foreground">
					Digite uma distância em mega lights (MGLT) para calcular quantas
					paradas são necessárias para cada espaçonave
				</p>
			</div>
			<div className={cn('grid gap-6')}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Distance
						</Label>
						<Input
							id="MGLT"
							placeholder="500.000 MGLT"
							type="number"
							autoCapitalize="none"
							autoCorrect="off"
							value={Number(distance)}
							onChange={event => setDistance(Number(event.target.value))}
							disabled={isLoading}
						/>
					</div>
					<Button
						disabled={isLoading}
						onClick={() => onHandleCalculateStops(Number(distance))}
					>
						{isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
						Calcular
					</Button>
				</div>
			</div>
		</div>
	)
}

export { InputSection }
