import {CraftItem} from "./craft-item";

export interface Blueprint {
  name: string;
  resources: Array<CraftItem>;
  products:Array<CraftItem>;
}
