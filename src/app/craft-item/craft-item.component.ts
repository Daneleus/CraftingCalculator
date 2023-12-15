import {Component, Input} from "@angular/core";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {CraftItem} from "../shared/model/craft-item";

@Component({
	selector: "app-craft-item",
	standalone: true,
	imports: [
		MatTableModule
	],
	templateUrl: "./craft-item.component.html",
	styleUrl: "./craft-item.component.scss"
})
export class CraftItemComponent {
	displayedColumns: string[] = [];
	@Input() dataSource: MatTableDataSource<CraftItem> = new MatTableDataSource<CraftItem>();

	constructor() {
		this.displayedColumns = ["name", "resource", "product"];
	}

}
