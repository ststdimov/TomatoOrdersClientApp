export class TomatoOrder {
    private _id: string;
    private _provider: string;
    private _timestamp: number;
    private _tomatoes: number;

    constructor() { }

    get id() {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get provider() {
        return this._provider;
    }

    set provider(provider: string) {
        this._provider = provider;
    }

    get timestamp() {
        return this._timestamp;
    }

    set timestamp(timestamp: number) {
        this._timestamp = timestamp;
    }

    get tomatoes() {
        return this._tomatoes;
    }

    set tomatoes(tomatoes: number) {
        this._tomatoes = tomatoes;
    }


}
