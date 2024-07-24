import { IUuid } from "../contracts/Iuuid";

export class UUID implements IUuid{
    generate(): string {
        throw new Error("Method not implemented.");
    }
}
