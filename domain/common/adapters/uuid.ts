import { IUuid } from "../contracts/Iuuid";
import { v4 as uuidv4 } from 'uuid';

export class UUID implements IUuid{
    generate(): string {
        return  uuidv4()
    }
}
