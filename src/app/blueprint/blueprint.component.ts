import { Component } from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {BlueprintService} from "../shared/service/blueprint.service";
import {Blueprint} from "../shared/model/blueprint";

@Component({
	selector: "app-blueprint",
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatTableModule
	],
	templateUrl: "./blueprint.component.html",
	styleUrl: "./blueprint.component.scss"
})
export class BlueprintComponent {
	displayedColumns: string[] = [];
	dataSource = new MatTableDataSource<Blueprint>();
	constructor(private blueprintService: BlueprintService) {
		this.dataSource = new MatTableDataSource<Blueprint>(blueprintService.initBlueprints());
		this.displayedColumns = ["id", "name", "resources", "products"];
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
