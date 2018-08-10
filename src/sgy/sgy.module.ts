import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import fr from "@angular/common/locales/fr";
import { SgyComponent } from "./sgy.component";
import { MultiTranslateHttpLoader } from "./@core/translateLoader";
import { registerLocaleData } from "@angular/common";
import { HttpModule } from "@angular/http";
import { SgyIdentityComponent } from "./identity/identity.component";
import { SgyMenuComponent } from "./menu/menu.component";
import { SgyCategoriesService } from "./@core/categories/categories.service";
import { SgyEducationComponent } from "./education/education.component";
import { SgyCategoryComponent } from "./category/category.component";
import { SgySkillsComponent } from "./skills/skills.component";

/**
 * get all translations
 * @param http http client
 */
export function translateLoader(http: HttpClient): MultiTranslateHttpLoader {
    return new MultiTranslateHttpLoader(http, [
        { prefix: "./i18n/Sgy/", suffix: ".json" }
    ]);
}
// register the FR locale
registerLocaleData(fr);

/**
 * Sgy module
 */
@NgModule({
    declarations: [
        SgyComponent,
        SgyIdentityComponent,
        SgyMenuComponent,
        SgyCategoryComponent,
        SgyEducationComponent,
        SgySkillsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (translateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: "fr" },
        SgyCategoriesService
    ],
    bootstrap: [
        SgyComponent
    ]
})
export class SgyModule { }
