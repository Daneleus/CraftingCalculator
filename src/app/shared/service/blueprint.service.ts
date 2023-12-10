import { Injectable } from '@angular/core';
import {Blueprint} from '../model/blueprint';

@Injectable({
	providedIn: 'root'
})
export class BlueprintService {

	constructor() { }

	initBlueprints(): Array<Blueprint>{
		return [
			{id:1,name:'test',resources:[],products:[]},
			{id:2,name:'test',resources:[],products:[]},
			{id:3,name:'test',resources:[],products:[]},
			{id:4,name:'test',resources:[],products:[]},
			{id:5,name:'test',resources:[],products:[]}
		];
	}
}
