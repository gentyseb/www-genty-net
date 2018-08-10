import { Component, Input } from "@angular/core";
import { Category } from "../@models/category.model";

/**
 * Sgy category component
 */
@Component({
    selector: "sgy-category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})
export class SgyCategoryComponent {
    /**
     * the category
     */
    @Input() category: Category;
}
