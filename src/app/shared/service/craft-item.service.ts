import { Injectable } from "@angular/core";
import {CraftItem} from "../model/craft-item";
import craftItems from "../data/craft-items.json";

@Injectable({
	providedIn: "root"
})
export class CraftItemService {

	constructor() { }


	initCraftItems(): Array<CraftItem>{
		return craftItems;
	}

}
