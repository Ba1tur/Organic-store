export interface IProduct {
	id: number,
	type: string,
	img: string,
	name: string,
	discount: number,
	price: number,
	description: string,
	count?: number,
}