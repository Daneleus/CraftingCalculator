import {Component} from "@angular/core";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CraftItem} from "../shared/model/craft-item";
import {DataService} from "../shared/service/data.service";

@Component({
	selector: "app-craft-item",
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatTableModule,
		MatInputModule
	],
	templateUrl: "./craft-item.component.html",
	styleUrl: "./craft-item.component.scss"
})
export class CraftItemComponent {
	displayedColumns: string[] = [];
	dataSource = new MatTableDataSource<CraftItem>();

	constructor(private dataService: DataService) {
		this.dataSource = new MatTableDataSource<CraftItem>(dataService.initCraftItems());
		this.displayedColumns = ["name", "resource", "product"];
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
