import { Injectable } from "@angular/core";
import { Category } from "../../@models/category.model";
import { CATEGORIES_MAP } from "./categories.constants";

/**
 * Sgy categories service
 */
@Injectable()
export class SgyCategoriesService {
    /**
     * Categories
     */
    private categories: Category[];

    /**
     * get Categories
     * @returns list of Category
     */
    public getCategories(): Category[] {
        if (!this.categories) {
            this.loadCategories();
        }
        return this.categories;
    }

    /**
     * load Categories with map
     */
    private loadCategories(): void {
        this.categories = CATEGORIES_MAP.map((category: any) => {
            return new Category(category.id, category.name, category.translate);
        });
    }
}
