import { Component, OnInit } from "@angular/core";
import { Education } from "../@models/education.model";
import * as educationStream from "./education.json";

/**
 * Sgy education component
 */
@Component({
    selector: "sgy-education",
    templateUrl: "./education.component.html",
    styleUrls: ["./education.component.scss"]
})
export class SgyEducationComponent {

    /**
     * education
     */
    public educations: Education[];

    /**
     * constructor
     */
    constructor() {
        const stream: any = educationStream;
        this.loadEducations(stream.datas);
    }
    /**
     * educations track by function
     * param index index iteration
     * return index of track by
     */
    public educationsTrackByFn(index: number): number {
        return index;
    }

    /**
     * Load educations from educationStream
     * @param datas educations stream
     */
    private loadEducations(datas: any[]): void {
        this.educations = datas.map((education: any) => new Education(education));
    }
}
