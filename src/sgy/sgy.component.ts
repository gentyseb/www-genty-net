import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Category } from "./@models/category.model";
import { SgyCategoriesService } from "./@core/categories/categories.service";
/**
 * sgy root component
 */
@Component({
    selector: "sgy-root",
    templateUrl: "./sgy.component.html",
    styleUrls: ["./sgy.component.scss"]
})
export class SgyComponent {

    /**
     * Categories
     */
    public categories: Category[];

    /**
     * Sgy component constructor
     * @param translate Translate service
     */
    constructor(
        private translate: TranslateService,
        private categoriesService: SgyCategoriesService

    ) {
        this.translate.setDefaultLang("fr-FR");
        this.categories = categoriesService.getCategories();
    }

    /**
     * categories track by function
     * param index index iteration
     * return index of track by
     */
    categoriesTrackByFn(index: number): number {
        return index;
    }
}
