import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SgySkillsComponent } from "./skills.component";

describe("SgySkillsComponent", () => {
    let component: SgySkillsComponent;
    let fixture: ComponentFixture<SgySkillsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SgySkillsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SgySkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component)
        .toBeTruthy();
    });
});
