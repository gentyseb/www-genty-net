/**
 * Education entity
 */
export class Education {
    /**
     * Year of graduation
     */
    public year: string;
    /**
     * Name
     */
    public name: string;
    /**
     * Option
     */
    public option?: string;

    /**
     * Contructor
     * @param education the education to create model
     */
    constructor(education: any) {
        if (education) {
            this.year = education.year;
            this.name = education.name;
            this.option = !!education.option ? education.option : null;
        }
    }
}
