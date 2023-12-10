import { TestBed } from "@angular/core/testing";

import { CraftItemService } from "./craft-item.service";

describe("CraftItemService", () => {
	let service: CraftItemService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CraftItemService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
