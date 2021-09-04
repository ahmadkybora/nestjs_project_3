export interface Product {
    id: string,
    name: string,
    //categoryId: string,
    description: string,
    //image: string,
    status: ProductStatus
}

export enum ProductStatus {
    ACTIVE = 'ACTIVE',
    DEACTIVE = 'DEACTIVE',
    PENDING = 'PENDING',
    SUSPENDED = 'SUSPENDED'
}
