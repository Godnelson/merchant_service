import { ProductService } from "../productService";
import { ProductValidator } from "./productValidator";

export class ProductHandler{
    constructor(
        service: ProductService,
        validator: ProductValidator
    ){}
}
