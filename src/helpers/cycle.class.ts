export default class Cycle {
    lastPeriodDate: Date;
    periodLength: number;
    differenceDay: number;

    constructor(
        public date: Date, 
        public differencePeriod: number, 
        public periodDays = 28) {
        this.lastPeriodDate = date;
        this.periodLength = periodDays;
        this.differenceDay = differencePeriod;
    }

    set updatePeriodDays (days: number){
        this.periodLength = days;
    }

    private menstrualCycle(): number {
        return this.periodLength;
    }

    private lastPeriod(): {start: Date, end: Date} {
        const start = new Date(this.lastPeriodDate);
        const end = new Date(start);
        end.setDate(end.getDate() + this.differenceDay);
        return {
            start,
            end,
        }
    }

    private nextPeriod(): {start: Date, end: Date} {
        const start = new Date(this.lastPeriodDate);
        start.setDate(start.getDate() + this.menstrualCycle());
        const end = new Date(start);
        end.setDate(end.getDate() + this.differenceDay)
        return {
            start,
            end,
        }
    }

    private ovulationPeriod(): Date {
        const nextPeriodDate = this.nextPeriod();
        const ovulationDay = new Date(nextPeriodDate.start);
        ovulationDay.setDate(nextPeriodDate.start.getDate() - 14); 
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