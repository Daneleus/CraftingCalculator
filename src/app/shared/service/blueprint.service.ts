import { Injectable } from "@angular/core";
import {Blueprint} from "../model/blueprint";
import blueprints from "../data/blueprints.json";

@Injectable({
	providedIn: "root"
})
export class BlueprintService {

	constructor() { }

	initBlueprints(): Array<Blueprint>{
		return blueprints;
	}
}
