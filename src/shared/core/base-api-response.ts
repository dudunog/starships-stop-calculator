export type BaseApiResponse<ResponseType> = {
	count: number
	next: string
	previous: string
	results: ResponseType
}
