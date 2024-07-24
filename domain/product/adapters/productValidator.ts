import { BaseValidator } from '../../base/baseValidator';
import { ValidationResponse } from '../../common/types/validationResponse';
import { Product } from '../product';
export class ProductValidator implements BaseValidator<Product>{
    constructor(){}

    validate(product: Product): ValidationResponse {
        let valid = true
        let errors:any[] = []

        this.isAllRequiredFieldsFilled(product, {valid, errors})
        return {valid, errors}
    }

    isAllRequiredFieldsFilled(product: Product, response: ValidationResponse): void{
        if(product.createdAt == null) response.valid = false; response.errors.push(Error("createdAt can't be null"))
    }
}
