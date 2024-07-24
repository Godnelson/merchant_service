export class PostgresConnection implements DatabaseConnection{
    connect(): void {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }
}
