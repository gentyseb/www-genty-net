import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import fr from "@angular/common/locales/fr";
import { AppComponent } from "./app.component";
import { MultiTranslateHttpLoader } from "./@core/translateLoader";
import { registerLocaleData } from "@angular/common";
import { HttpModule } from "@angular/http";

/**
 * get all translations
 * @param http http client
 */
export function translateLoader(http: HttpClient): MultiTranslateHttpLoader {
    return new MultiTranslateHttpLoader(http, [
        { prefix: "./i18n/Common/", suffix: ".json" }
    ]);
}
// register the FR locale
registerLocaleData(fr);

/**
 * App module
 */
@NgModule({
    declarations: [
        AppComponent
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
        }),
    ],
    providers: [
        { provide: LOCALE_ID, useValue: "fr" }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
