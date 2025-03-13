export default class Cycle {
    lastPeriodDate: Date;
    periodLength: number;

    constructor(public date: Date, public periodDays = 28) {
        this.lastPeriodDate = date;
        this.periodLength = periodDays;
    }

    set updatePeriodDays (days: number){
        this.periodLength = days;
    }

    private menstrualCycle(): number {
        return this.periodLength;
    }

    private lastPeriod(): Date {
        return new Date(this.lastPeriodDate);
    }

    private nextPeriod(): Date {
        const firstDay = new Date(this.lastPeriodDate);
        firstDay.setDate(firstDay.getDate() + this.menstrualCycle());
        return firstDay;
    }

    private ovulationPeriod(): Date {
        const nextPeriodDate = this.nextPeriod();
        const ovulationDay = new Date(nextPeriodDate);
        ovulationDay.setDate(nextPeriodDate.getDate() - 14); 
        return ovulationDay;
    }

    private fertileWindow(): { start: Date; end: Date } {
        const ovulationDay = this.ovulationPeriod();
        const fertileStart = new Date(ovulationDay);
        fertileStart.setDate(ovulationDay.getDate() - 5); 

        return { start: fertileStart, end: ovulationDay };
    }

    get allCycles() {
        return {
            ovulationDay: this.ovulationPeriod(),
            fertilePeriod: this.fertileWindow(),
            lastPeriod: this.lastPeriod(),
            nextPeriod: this.nextPeriod(),
        };
    }
}