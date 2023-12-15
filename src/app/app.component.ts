import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {CraftItemComponent} from "./craft-item/craft-item.component";
import {BlueprintComponent} from "./blueprint/blueprint.component";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableDataSource} from "@angular/material/table";
import {CraftItem} from "./shared/model/craft-item";
import {DataService} from "./shared/service/data.service";
import {Blueprint} from "./shared/model/blueprint";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, CraftItemComponent, BlueprintComponent, MatButtonModule, MatFormFieldModule, MatInputModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss"
})
export class AppComponent {
	dataSourceCraftItems: MatTableDataSource<CraftItem>;
	dataSourceBlueprints: MatTableDataSource<Blueprint>;
	constructor(private dataService: DataService) {
		this.dataSourceCraftItems = new MatTableDataSource<CraftItem>(dataService.initCraftItems());
		this.dataSourceBlueprints = new MatTableDataSource<Blueprint>(dataService.initBlueprints());
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSourceCraftItems.filter = filterValue.trim().toLowerCase();
		this.dataSourceBlueprints.filter = filterValue.trim().toLowerCase();
	}
}
