import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SgyMenuComponent } from "./menu.component";

describe("SgyMenuComponent", () => {
    let component: SgyMenuComponent;
    let fixture: ComponentFixture<SgyMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SgyMenuComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SgyMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component)
        .toBeTruthy();
    });
});
