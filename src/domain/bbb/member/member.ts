export class Member {
    readonly id: string
    readonly serviceTerm: ServiceTerm
    readonly course: Course

    constructor(id: string, serviceTerm: ServiceTerm, course: Course) {
        this.id = id
        this.serviceTerm = serviceTerm
        this.course = course
    }
}

export class Course {
    readonly id: string
    readonly courseTerm: CourseTerm

    constructor(id: string, courseTerm: CourseTerm) {
        this.id = id
        this.courseTerm = courseTerm
    }

    isHikariCourseActive(date: Date): boolean {
        return this.id == "ひかりコース" && this.courseTerm.isActive(date)
    }
}

export class CourseTerm {
    readonly startDate: Date
    readonly endDate: Date

    constructor(startDate: Date, endDate: Date) {
        this.startDate = startDate
        this.endDate = endDate
    }

    isActive(date: Date): boolean {
        return this.startDate <= date && date <= this.endDate
    }
}

export class ServiceTerm {
    private startDate: Date
    private endDate: Date

    constructor(startDate: Date, endDate: Date) {
        this.startDate = startDate
        this.endDate = endDate
    }

    isActive(date: Date): boolean {
        return this.startDate <= date && date <= this.endDate
    }
}


