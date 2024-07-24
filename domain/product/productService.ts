import { UUID } from '../common/adapters/uuid';
import { OperationPayload } from '../common/types/operationPayload';
import { Product } from './product';
import { ProductRepository } from './adapters/productRepository';

export class ProductService {
    constructor(
        private repo: ProductRepository,
        private uuid: UUID
    ){}


    async createProduct(product: Product, owner_id: string): Promise<OperationPayload<Product | Error>>{
        try{
            const inner_product = new Product(
                this.uuid.generate(),
                product.name,
                product.price,
                product.quantity,
                owner_id,
                new Date()
            )
            const result = await this.repo.create(inner_product)
            return {
                success: true,
                payload: result
            }
        }
        catch(err: any){
            return {
                success: false,
                payload: Error(err.message)
            }
        }
    }

    async getAllProducts(): Promise<OperationPayload<Product[] | Error>>{
        try{
            return {
                success: true,
                payload: await this.repo.list()
            }
        }
        catch(err: any){
            return {
                success: false,
                payload: Error(err.message)
            }
        }
    }

    async getProductById(id: string): Promise<OperationPayload<Product | Error>>{
        try{
            return {
                success: true,
                payload: await this.repo.listById(id)
            }
        }
        catch(err: any){
            return {
                success: false,
                payload: Error(err.message)
            }
        }
    }

    async updateProduct(product: Product): Promise<OperationPayload<Product | Error>>{
        try{
            return {
                success: true,
                payload: await this.repo.update(product)
            }
        }
        catch(err: any){
            return {
                success: false,
                payload: Error(err.message)
            }
        }
    }

    async deleteProduct(id: string): Promise<OperationPayload<string | Error>>{
        try{
            return {
                success: true,
                payload: await this.repo.delete(id)
            }
        }
        catch(err: any){
            return {
                success: false,
                payload: Error(err.message)
            }
        }
    }
}
