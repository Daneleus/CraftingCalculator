import {Component, Input} from "@angular/core";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Blueprint} from "../shared/model/blueprint";

@Component({
	selector: "app-blueprint",
	standalone: true,
	imports: [
		MatTableModule
	],
	templateUrl: "./blueprint.component.html",
	styleUrl: "./blueprint.component.scss"
})
export class BlueprintComponent {
	displayedColumns: string[] = [];
	@Input() dataSource = new MatTableDataSource<Blueprint>();
	constructor() {
		this.displayedColumns = ["name", "resources", "products"];
	}

}
