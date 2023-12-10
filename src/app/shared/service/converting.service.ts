import {Injectable} from "@angular/core";
import {CraftItemRaw} from "../model/craft-item-raw";
import {BlueprintRaw} from "../model/blueprint-raw";
import {CraftItem} from "../model/craft-item";

@Injectable({
	providedIn: "root"
})
export class ConvertingService {

	constructor() {
	}

	convertFromCraftItemRaw(craftItemsRaw: CraftItemRaw, blueprintsRaw: Array<BlueprintRaw>): CraftItem {
		return ({
			name: craftItemsRaw.name,
			blueprints: blueprintsRaw.map(blueprint => this.blueprintToString(blueprint)).join(", ")
		} as CraftItem);
	}

	craftItemRawToString(craftItemsRaw: CraftItemRaw): string {
		return craftItemsRaw.count + " " + craftItemsRaw.name;
	}

	blueprintToString(blueprintRaw: BlueprintRaw) {
		return blueprintRaw.name;
	}

}
