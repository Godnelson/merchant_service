import typia, { tags } from "typia";
import { BaseValidator } from '../../base/baseValidator';
import { ValidationResponse } from '../../common/types/validationResponse';
import { Product } from '../product';

export class ProductValidator implements BaseValidator<Product>{
    validate(product: Product): ValidationResponse {
        const result = typia.validate<IProduct>(product)
        return {valid: result.success, errors: result.errors}
    }

    validateDTO(product: Product): ValidationResponse {
        const result = typia.validate<IProductDTO>(product)
        return {valid: result.success, errors: result.errors}
    }
}

interface IProduct{
    id: string & tags.Format<"uuid">,
    name: string & tags.MaxLength<255>,
    price: number &
    tags.Type<"float"> &
    tags.ExclusiveMinimum<0.0>,
    quantity: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<0>,
    ownerId: string & tags.Format<"uuid">,
    createdAt: Date & tags.Format<"date-time">,
    updatedAt?: (Date & tags.Format<"date-time">) | undefined,
    deletedAt?: (Date & tags.Format<"date-time">) | undefined,
}

interface IProductDTO{
    name: string & tags.MaxLength<255>,
    price: number &
    tags.Type<"float"> &
    tags.ExclusiveMinimum<0.0>,
    quantity: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<0>,
    ownerId: string & tags.Format<"uuid">,
}
