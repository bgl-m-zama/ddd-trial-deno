import {Member} from "../../member/member.ts";
import {BbbBilling} from "../bbbBilling.ts";


export class BbbBillingMemberCondition {
    private readonly member: Member
    private readonly bbbBilling: BbbBilling

    constructor(member: Member, bbbBilling: BbbBilling) {
        this.member = member
        this.bbbBilling = bbbBilling
    }

    valid(): boolean{
        return this.member.serviceTerm.isActive(this.bbbBilling.useDateTerm.useStartDate)
        && this.member.course.isHikariCourseActive(this.bbbBilling.useDateTerm.useStartDate)
    }
}


