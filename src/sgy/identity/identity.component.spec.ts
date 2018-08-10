import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SgyIdentityComponent } from "./identity.component";

describe("SgyIdentityComponent", () => {
    let component: SgyIdentityComponent;
    let fixture: ComponentFixture<SgyIdentityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SgyIdentityComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SgyIdentityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component)
        .toBeTruthy();
    });
});
