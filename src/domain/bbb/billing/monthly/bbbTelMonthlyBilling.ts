import {BbbMonthlyBilling} from "./bbbMonthlyBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbTelMonthlyBilling implements BbbMonthlyBilling {
    amount: number
    nnnCodes: Code[] = [Code.電話月額料金]
    constructor(amount: number) {
        this.amount = amount
    }
}