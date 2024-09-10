export abstract class UserRepository {
    abstract create(name: string, lastname: string): Promise<void>;
}