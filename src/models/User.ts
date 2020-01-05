import axios, {AxiosResponse} from 'axios';
import {Eventing} from "./Eventing";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}


export class User {
    events:Eventing = new Eventing();

    constructor(private data: UserProps) {};

    get(propName: string): number | string{
        return this.data[propName];
    }

    set(data: UserProps): void {
        Object.assign(this.data, data);
    }

    fetch(): void {
        axios.get(`http:localhost:3000/users/${this.get("id")}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            })
    }

    save(): void {
        const id = this.get("id");

        if(this.get("id")){
            // put
            axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data)
        }else{
            // post
            axios.post("http:localhost:3000/users/users", this.data);
        }
    }
}

