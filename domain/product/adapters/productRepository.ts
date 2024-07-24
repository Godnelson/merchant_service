import { BaseRepository } from "../../base/baseRepository";
import { Product } from "../product";

export class ProductRepository implements BaseRepository<Product>{
    private databaseConnection: DatabaseConnection

    constructor(
        databaseConnection: DatabaseConnection
    ){
        this.databaseConnection = databaseConnection
    }



    async create(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    async listById(id: string): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    async update(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

}
