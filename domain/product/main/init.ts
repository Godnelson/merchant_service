import { PostgresConnection } from "../../../infra/postgresConnection";
import { UUID } from "../../common/adapters/uuid";
import { ProductHandler } from "../adapters/productHandler";
import { ProductRepository } from "../adapters/productRepository";
import { ProductValidator } from "../adapters/productValidator";
import { ProductService } from "../productService";

export class InitProduct{
    init(): ProductHandler{
        const uuid = new UUID()
        const databaseConnection = new PostgresConnection()
        const repository = new ProductRepository(databaseConnection)
        const service = new ProductService(repository, uuid)
        const validator = new ProductValidator()
        const handler = new ProductHandler(service, validator)
        return handler
    }
}
