import {Caf} from "./caf.ts";

export class NnnBilling {
    readonly code: NnnBillingCode
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(code: NnnBillingCode, caf:Caf, amount: number, useStartDate: Date, useEndDate: Date) {
        this.code = code
        this.caf = caf
        this.amount = amount
        this.useDateTerm = new UseDateTerm(useStartDate, useEndDate)
    }
}

export enum NnnBillingCode {
    回線工事費 = 111,
    端末設置費 = 222,
    回線月額料金 = 333,
    電話工事費 = 444,
    電話月額料金 = 555,
    テレビ月額料金 = 666,
    テレビ工事費 = 777,
}

export class UseDateTerm{
    readonly useStartDate: Date
    private useEndDate: Date
    constructor(useStartDate: Date, useEndDate: Date) {
        this.useStartDate = useStartDate
        this.useEndDate = useEndDate
    }
}