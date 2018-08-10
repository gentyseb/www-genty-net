import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SgyEducationComponent } from "./education.component";

describe("SgyEducationComponent", () => {
    let component: SgyEducationComponent;
    let fixture: ComponentFixture<SgyEducationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SgyEducationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SgyEducationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component)
        .toBeTruthy();
    });
});
