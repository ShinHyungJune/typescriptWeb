export class Attribute<T> {
    constructor(private data: T){}

    // Key 타입은 T의 키중의 하나고, 얻는 값은 T[K]
    /*
    {
        id: number,
        name: string
    }
    => 키가 id면 타입체크는 number를 리턴하길 기대하겠구나
    => K는 id, name중에서만 가능하다고 타입체크를 하겠구나(갑자기 user.get("age")같은 뻘짓 못하게 막아주겠구나
    * */
    get = <K extends keyof T>(key: K): T[K] => { // arrow function을 써주면 this를 attributes로 제대로 바운딩해줌
        return this.data[key];
    };

    set(data: T): void {
        Object.assign(data, data);
    }

    getAll(): T {
        return this.data;
    }
}

