import {settings} from "./settings";

export class Player {
    constructor(name) {
        this.health = settings.healthMaxValue;
        this.name = name;
    }
}