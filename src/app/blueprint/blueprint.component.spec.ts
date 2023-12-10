import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintComponent } from './blueprint.component';
import {provideAnimations} from '@angular/platform-browser/animations';

describe('BlueprintComponent', () => {
	let component: BlueprintComponent;
	let fixture: ComponentFixture<BlueprintComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BlueprintComponent],
			providers: provideAnimations()
		})
			.compileComponents();

		fixture = TestBed.createComponent(BlueprintComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
