import {Component} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Blueprint} from "../shared/model/blueprint";
import {DataService} from "../shared/service/data.service";

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
	constructor(private dataService: DataService) {
		this.dataSource = new MatTableDataSource<Blueprint>(dataService.initBlueprints());
		this.displayedColumns = ["name", "resources", "products"];
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
