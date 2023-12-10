import {CraftItem} from './craft-item';

export interface Blueprint {
  id: number;
  name: string;
  resources: Array<CraftItem>;
  products:Array<CraftItem>;
}
