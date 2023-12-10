import {TestBed} from "@angular/core/testing";

import {ConvertingService} from "./converting.service";

describe("BlueprintService", () => {
	let service: ConvertingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ConvertingService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
