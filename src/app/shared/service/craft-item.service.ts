import { Injectable } from '@angular/core';
import {CraftItem} from '../model/craft-item';

@Injectable({
	providedIn: 'root'
})
export class CraftItemService {

	constructor() { }


	initCraftItems(): Array<CraftItem>{
		return [
			{id: 1, name: 'Hydrogen', count: 1.0079, blueprints: []},
			{id: 2, name: 'Helium', count: 4.0026, blueprints: []},
			{id: 3, name: 'Lithium', count: 6.941, blueprints: []},
			{id: 4, name: 'Beryllium', count: 9.0122, blueprints: []},
			{id: 5, name: 'Boron', count: 10.811, blueprints: []},
			{id: 6, name: 'Carbon', count: 12.0107, blueprints: []},
			{id: 7, name: 'Nitrogen', count: 14.0067, blueprints: []},
			{id: 8, name: 'Oxygen', count: 15.9994, blueprints: []},
			{id: 9, name: 'Fluorine', count: 18.9984, blueprints: []},
			{id: 10, name: 'Neon', count: 20.1797, blueprints: []},
		];
	}

}
