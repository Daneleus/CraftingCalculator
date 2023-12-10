import {Injectable} from "@angular/core";
import {CraftItem} from "../model/craft-item";
import craftItemsRaw from "../data/craft-items-raw.json";
import {CraftItemRaw} from "../model/craft-item-raw";
import {ConvertingService} from "./converting.service";
import {Blueprint} from "../model/blueprint";
import blueprintsRaw from "../data/blueprints-raw.json";
import {BlueprintRaw} from "../model/blueprint-raw";

@Injectable({
	providedIn: "root"
})
export class DataService {

	constructor(private blueprintService: ConvertingService) {
	}


	initCraftItems(): Array<CraftItem> {
		return craftItemsRaw.map(item => this.blueprintService.convertFromCraftItemRaw(item, this.getBlueprints(item)));
	}

	initBlueprints(): Array<Blueprint> {
		return blueprintsRaw.map(blueprint => ({
			name: blueprint.name,
			resources: blueprint.resources.map(item => this.blueprintService.craftItemRawToString(item)).join(", "),
			products: blueprint.products.map(item => this.blueprintService.craftItemRawToString(item)).join(", ")
		}));
	}

	getBlueprints(craftItem: CraftItemRaw): Array<BlueprintRaw> {
		return (blueprintsRaw as Array<BlueprintRaw>)
			.filter(blueprint =>
				blueprint.products.map(product => product.name).includes(craftItem.name)
        || blueprint.resources.map(product => product.name).includes(craftItem.name)
			);
	}


}