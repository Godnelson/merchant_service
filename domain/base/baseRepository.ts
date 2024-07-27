import { OperationPayload } from "../common/types/operationPayload"
import { BaseModel } from "./base"

export interface BaseRepository<T>{
    create(t: T): Promise<T>
    list(): Promise<T[]>
    listById(id: string): Promise<T>
    update(t: T): Promise<T>
    delete(id: string): Promise<string>
}
