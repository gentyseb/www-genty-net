import { Component, OnInit } from "@angular/core";
import { Identity } from "../@models/identity.model";
import * as identityData from "./identity.json";

/**
 * Sgy Identity component
 */
@Component({
    selector: "sgy-identity",
    templateUrl: "./identity.component.html",
    styleUrls: ["./identity.component.scss"]
})
export class SgyIdentityComponent {

    /**
     * Identity
     */
    public identity: Identity;

    /**
     * constructor
     */
    constructor() {
        this.identity = new Identity(identityData);
    }
}
