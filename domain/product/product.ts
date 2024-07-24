import { BaseModel } from "../base/base"

export class Product implements BaseModel {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public quantity: number,
        public ownerId: string,
        public createdAt: Date,
        public updatedAt?: Date | undefined,
        public deletedAt?: Date | undefined,
    ){}
}
