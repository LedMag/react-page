export interface IProduct {
    id: number,
    name: string,
    img_url: string,
    imgs?: string[],
    // category: string,
    // collection: string,
    description_en?: string,
    description_es?: string,
    description_ru?: string,
    price: number,
}