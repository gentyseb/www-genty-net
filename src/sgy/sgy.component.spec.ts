import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateModule } from "@ngx-translate/core";

import { SgyComponent } from "./sgy.component";
import { SgyIdentityComponent } from "./identity/identity.component";

describe("SgyComponent", () => {
    let component: SgyComponent;
    let fixture: ComponentFixture<SgyComponent>;
    let template: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SgyComponent,
                SgyIdentityComponent
            ],
            imports: [
                TranslateModule.forRoot()
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(SgyComponent);
        component = fixture.debugElement.componentInstance;
        template = fixture.debugElement.nativeElement;

    }));
    it("should create the SgyComponent", async(() => {
        expect(component)
        .toBeTruthy();
    }));
});
