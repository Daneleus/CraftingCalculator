import {CraftItemRaw} from "./craft-item-raw";

export interface BlueprintRaw {
  name: string;
  resources: Array<CraftItemRaw>;
  products:Array<CraftItemRaw>;
}
