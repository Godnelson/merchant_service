import { OperationPayload } from "./common/types/operationPayload";
import { BaseModel } from "./base/base";
import { Product } from "./product/product";

export class Profile extends BaseModel {
    constructor(
        base: BaseModel,
        public firstName: string,
        public lastName: string,
        public email: string,
        public authId: string
    ){
        super(base.createdAt, base.id, base.updatedAt, base.deletedAt)
    }

}
