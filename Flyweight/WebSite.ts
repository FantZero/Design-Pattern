import { User } from "./User";

export abstract class WebSite {
    
    abstract use(user: User): void;
}