/**
 * Address entity
 */
export class Address {
    /**
     * address line 1
     */
    public line1: string;
    /**
     * address line 2
     */
    public line2: string;
    /**
     * ZipCode
     */
    public zipCode: string;
    /**
     * Town
     */
    public town: string;
    /**
     * Country
     */
    public country: string;

    /**
     * Contructor
     * @param address the address to create model
     */
    constructor(address: any) {
        if (address) {
            this.line1 = address.line1;
            this.line2 = address.line2;
            this.zipCode = address.zipCode;
            this.town = address.town;
            this.country = address.country;
        }
    }
}
