import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

/**
 * App component
 */
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    /**
     * title
     */
    public title: string = "www.genty.net";

    /**
     * App component constructor
     * @param translate Translate service
     */
    constructor(
        private translate: TranslateService
    ) {}

    /**
     * Angular On init
     */
    ngOnInit(): void {
        this.translate.setDefaultLang("fr-FR");
    }
}
