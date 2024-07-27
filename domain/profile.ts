import { OperationPayload } from "./common/types/operationPayload";
import { BaseModel } from "./base/base";
import { Product } from "./product/product";

export class Profile implements BaseModel {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public authId: string,
        public createdAt: Date,
        public updatedAt?: Date | undefined,
        public deletedAt?: Date | undefined,
    ){}


}
