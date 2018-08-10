/**
 * Category entity
 */
export class Category {
    /**
     * id
     */
    public id: number;
    /**
     * name
     */
    public name: string;
    /**
     * label
     */
    public label: string;

    /**
     * Contructor
     */
    constructor(id: number, name: string, label: string) {
        this.id = id;
        this.name = name;
        this.label = label;
    }
}
