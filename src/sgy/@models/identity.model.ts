import { Address } from "./address.model";

/**
 * Identity entity
 */
export class Identity {
    /**
     * Last Name
     */
    public lastName: string;
    /**
     * First Name
     */
    public firstName: string;
    /**
     * title
     */
    public title: string;
    /**
     * Phone number
     */
    public phoneNumber: string;
    /**
     * Email
     */
    public email: string;
    /**
     * Age
     */
    public age: number;
    /**
     * marital Status
     */
    public maritalStatus: string;
    /**
     * driver's license
     */
    public driverLicense: string;
    /**
     * address
     */
    public address: Address;

    /**
     * Contructor
     * @param identity the identity to create model
     */
    constructor(identity: any) {
        if (identity) {
            this.lastName = identity.lastName;
            this.firstName = identity.firstName;
            this.phoneNumber = identity.phoneNumber;
            this.email = identity.email;
            this.age = identity.age;
            this.maritalStatus = identity.maritalStatus;
            this.driverLicense = identity.driverLicense;
            this.address = new Address(identity.address);
        }
    }
}
