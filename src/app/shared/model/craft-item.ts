import {Blueprint} from './blueprint';

export interface CraftItem {
	id:number;
	name:string;
	count:number;
	blueprints: Array<Blueprint>;
}
