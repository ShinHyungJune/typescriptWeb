import {Model} from "./Model";
import {ApiSync} from "./ApiSync";
import {Attribute} from "./Attribute";
import {Eventing} from "./Eventing";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps>{
    static build(attrs: UserProps): User {
        return new User(
            new Attribute<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }
}
