export interface IProduct {
    id: number,
    name: string,
    img_url: string,
    imgs?: string[],
    category: ICategory,
    collection: ICollection,
    description_en?: string,
    description_es?: string,
    description_ru?: string,
    price: number,
}

export interface ICategory {
    id: number,
    name: string,
    img_url?: string,
    createdAt: string,
    updatedAt?: string,
    deletedAt?: string,
    description_en: string,
    description_es: string,
    description_ru: string
}

export interface ICollection {
    id: number,
    name: string,
    img_url?: string,
    createdAt: string,
    updatedAt?: string,
    deletedAt?: string,
    description_en: string,
    description_es: string,
    description_ru: string
}