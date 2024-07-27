import { UUID } from "../../common/adapters/uuid"
import { ProductValidator } from "../adapters/productValidator"
import { Product } from "../product"

describe("testing possibilties in product creation", () => {
    it("Must be an error if product dont fill on product Validator", () => {
        const validator  = new ProductValidator()
        const fakeProduct: any = {name: "luiz"}
        const result = validator.validate(fakeProduct)
        expect(result.valid).toBe(false)
    }),
    it("Must pass when all requirements of a product is achived", () => {
        const uuid = new UUID()
        const validator  = new ProductValidator()
        const product: Product = {
            id: uuid.generate(),
            name: "luiz",
            price: 100.0,
            quantity: 200,
            createdAt: new Date(),
            ownerId: uuid.generate(),
        }
        const result = validator.validate(product)
        expect(result.valid).toBe(true)
    })
})
