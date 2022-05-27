import {BbbMonthlyBilling} from "./bbbMonthlyBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbTvMonthlyBilling implements BbbMonthlyBilling {
    amount: number
    nnnCodes: Code[] = [Code.テレビ月額料金]
    constructor(amount: number) {
        this.amount = amount
    }
}