/**
 *
 *
 * @export
 * @class TomatoOrder
 */
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
    /**
     *
     * @param provider Provider to set should be one
     * from the following list of providers:
     * "Heinz", "Hunt's", "Del Monte", "Le Ol' Granma"
     * @memberof TomatoOrder
     */
    set provider(provider: string) {
        this._provider = provider;
    }

    /**
     *
     * @returns long Returned timestamp is measured in milliseconds
     * @memberof TomatoOrder
     */
    get timestamp() {
        return this._timestamp;
    }

    set timestamp(timestamp: number) {
        this._timestamp = timestamp;
    }
    /**
     *
     * @returns amount of tomatoes in kilograms
     * @memberof TomatoOrder
     */
    get tomatoes() {
        return this._tomatoes;
    }
    /**
     *
     * @param tomatoes Tomatoes amount (in kilograms)
     *
     * * should be greater than 0 and not greater than 2000
     * @memberof TomatoOrder
     */
    set tomatoes(tomatoes: number) {
        this._tomatoes = tomatoes;
    }


}
