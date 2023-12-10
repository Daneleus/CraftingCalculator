import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftItemComponent } from './craft-item.component';
import {provideAnimations} from '@angular/platform-browser/animations';

describe('CraftItemComponent', () => {
	let component: CraftItemComponent;
	let fixture: ComponentFixture<CraftItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CraftItemComponent],
			providers: provideAnimations()
		})
			.compileComponents();

		fixture = TestBed.createComponent(CraftItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
