import {UseDateTerm} from "../../nnn/billing/nnnBilling.ts";
import {Member} from "../member/member.ts";
import {Caf} from "../../nnn/contract/caf.ts";

export interface BbbBilling {
    caf: Caf
    amount: number
    useDateTerm: UseDateTerm

    fix(member: Member): BbbBillingFixed | null
}


export class BbbBillingFixed {
    userId: string
    amount: number
    useDateTerm: UseDateTerm

    constructor(member: Member, bbbBilling: BbbBilling) {
        this.userId = member.id
        this.amount = bbbBilling.amount
        this.useDateTerm = bbbBilling.useDateTerm
    }
}




