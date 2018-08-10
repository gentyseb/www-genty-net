import { Component, Input } from "@angular/core";
import { Category } from "../@models/category.model";

/**
 * Sgy menu component
 */
@Component({
    selector: "sgy-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"]
})
export class SgyMenuComponent {

    /**
     * Categories
     */
    @Input() categories: Category[];

    /**
     * categories track by function
     * param index index iteration
     * return index of track by
     */
    categoriesTrackByFn(index: number): number {
        return index;
    }
}
