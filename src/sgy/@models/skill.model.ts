/**
 * Skill entity
 */
export class Skill {
    /**
     * Name
     */
    public name: string;
    /**
     * Level
     */
    public level: number;
    /**
     * Major
     */
    public major: boolean;

    /**
     * Contructor
     * @param skill the skill to create model
     */
    constructor(skill: any) {
        if (skill) {
            this.name = skill.name;
            this.level = skill.level;
            this.major = skill.major;
        }
    }
}
