import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SgyCategoryComponent } from "./category.component";

describe("SgyCategoryComponent", () => {
    let component: SgyCategoryComponent;
    let fixture: ComponentFixture<SgyCategoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SgyCategoryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SgyCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component)
        .toBeTruthy();
    });
});
