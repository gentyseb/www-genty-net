import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Skill } from "../@models/skill.model";
import { SkillGroup } from "../@models/skill-group.model";
import * as skillsStream from "./skills.json";
import { Chart } from "chart.js";
/**
 * Sgy skills component
 */
@Component({
    selector: "sgy-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"]
})
export class SgySkillsComponent implements AfterViewInit {

    /**
     * Skill Group
     */
    public skillGroups: SkillGroup[];

    public charts: any[];

    /**
     * constructor
     */
    constructor() {
        const stream: any = skillsStream;
        this.loadSkills(stream.datas);
        this.convertSkillsToChart();
    }
    /**
     * After View Init
     */
    public ngAfterViewInit(): void {
        this.addChartToCanvas();
    }

    /**
     * skills track by function
     * param index index iteration
     * return index of track by
     */
    public skillsTrackByFn(index: number): number {
        return index;
    }
    /**
     * skills groups track by function
     * param index index iteration
     * return index of track by
     */
    public skillGroupsTrackByFn(index: number): number {
        return index;
    }
    /**
     * Load skills from skillStream
     * @param datas skills stream
     */
    private loadSkills(datas: any[]): void {
        this.skillGroups = datas.map((skillGroup: any) => new SkillGroup(skillGroup));
    }
    /**
     * Load skills from skillStream
     * @param datas skills stream
     */
    private convertSkillsToChart(): void {
        this.charts = this.skillGroups.map((skillGroup: SkillGroup) => {
            const id: string = `canvas-${skillGroup.name}`;
            return {
                id,
                name: skillGroup.name,
                options : {
                    type: "horizontalBar",
                    data: {
                        labels: skillGroup.skills.map((skill: Skill) => skill.name),
                        datasets: [
                            {
                                data: skillGroup.skills.map((skill: Skill) => skill.level),
                                backgroundColor: "#4d6199",
                                fill: false,
                            }
                        ]
                    },
                    options: {
                        title: {
                            text: skillGroup.name,
                            fontSize: 14,
                            fontColor: "#000",
                            display: true
                        },
                        animation: {
                            duration: 3000,
                            easing: "easeInOutQuad"
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                display: false,
                                ticks: {
                                    min: 0,
                                    max: 5,
                                    beginAtZero: true
                                }
                            }],
                            yAxes: [{
                                display: true,
                                categoryPercentage: 1,
                                barPercentage: 0.4
                            }],
                        }
                    }
                }
            };
        });
    }
    /**
     * add Chart To Canvas
     */
    private addChartToCanvas(): void {
        const charts = this.charts;

        charts.forEach((chart: any) => {
            chart.canvas = new Chart(chart.id, chart.options);
        });

        this.charts = charts;
    }
}
