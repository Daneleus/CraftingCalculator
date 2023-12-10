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

	convertFromCraftItemRaw(craftItemsRaw: CraftItemRaw, blueprintsRawAsResource: Array<BlueprintRaw>, blueprintsRawAsProduct: Array<BlueprintRaw>): CraftItem {
		return ({
			name: craftItemsRaw.name,
			resource: blueprintsRawAsResource.map(blueprint => this.blueprintToString(blueprint)).join(", "),
			product: blueprintsRawAsProduct.map(blueprint => this.blueprintToString(blueprint)).join(", ")
		} as CraftItem);
	}

	craftItemRawToString(craftItemsRaw: CraftItemRaw): string {
		if (!!craftItemsRaw.count && craftItemsRaw.count < 1) return "";
		return craftItemsRaw.count + " " + craftItemsRaw.name;
	}

	blueprintToString(blueprintRaw: BlueprintRaw) {
		return blueprintRaw.name;
	}

}
