import { TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";
/**
 * Multi Translate Http Loader
 * @extends TranslateLoader
 */
export class MultiTranslateHttpLoader implements TranslateLoader {

    /**
     * Constructor of the MultiTranslateHttpLoader
     * @param http http client
     * @param resources variables to retreive file
     */
    constructor(private http: HttpClient, public resources: { prefix: string, suffix: string }[] = [{
        prefix: "/i18n/",
        suffix: ".json"
    }]) { }

    /**
     * Gets the translations from the server
     * @returns translations
     */
    public getTranslation(lang: string): any {
        return forkJoin(this.resources.map((config: any) => {
            return this.http.get(`${config.prefix}${lang}${config.suffix}`);
        }))
        .pipe(
            map((response: any) => {
                return response.reduce((a: any, b: any) => {
                    return { ...a, ...b };
                });
            })
        );
    }
}
