export interface IExternalApiUsers {
    validateToken(token: string): Promise<boolean>;
}
