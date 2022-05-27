import {Code, NnnBilling} from "../nnn/nnnBilling.ts";

export interface BbbBilling {
    amount: number
    nnnCodes: Code[]
}

export class BbbBillingFactory {
    static createBy(nnnBillings: NnnBilling[]): BbbBilling[] {
        return []
    }
}