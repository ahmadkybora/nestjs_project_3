import {Controller, Get} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {Product} from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {
    }

    @Get()
    getAll(): Product[] {
        return this.productsService.getAllProducts()
    }

}

