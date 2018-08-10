import { Skill } from "./skill.model";

/**
 * Skill group entity
 */
export class SkillGroup {
    /**
     * Name
     */
    public name: string;
    /**
     * Level
     */
    public skills: Skill[];

    /**
     * Contructor
     * @param skillGroup the skill Group to create model
     */
    constructor(skillGroup: any) {
        if (skillGroup) {
            this.name = skillGroup.name;
            if (skillGroup.skills && skillGroup.skills.length > 0) {
                this.skills = skillGroup.skills.map((skill: any) => new Skill(skill));
            }
        }
    }
}
