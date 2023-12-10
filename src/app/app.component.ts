import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CraftItemComponent} from './craft-item/craft-item.component';
import {BlueprintComponent} from './blueprint/blueprint.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, CraftItemComponent, BlueprintComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'CraftingCalculator';
}
