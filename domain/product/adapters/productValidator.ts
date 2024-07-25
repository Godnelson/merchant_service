import typia, { tags } from "typia";
import { BaseValidator } from '../../base/baseValidator';
import { ValidationResponse } from '../../common/types/validationResponse';
import { Product } from '../product';
export class ProductValidator implements BaseValidator<Product>{
    constructor(){}

    validate(product: Product): ValidationResponse {
        return {} as ValidationResponse
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
    createdAt: Date & tags.Format<"uuid">,
    updatedAt?: Date | undefined & tags.Format<"uuid">,
    deletedAt?: Date | undefined & tags.Format<"uuid">,
}
