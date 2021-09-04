import {Injectable} from '@nestjs/common';
import {Product, ProductStatus} from './interfaces/product.interface';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    public getAllProducts(): Product[] {
        return this.products;
    }

    public createProduct(name: string, description: string): Product {
        const product: Product = {
            id: uuidv4(),
            name,
            description,
            status: ProductStatus.ACTIVE
        }

        this.products.push(product);
        return product
    }
}
