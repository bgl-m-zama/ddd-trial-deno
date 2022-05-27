import {BbbMonthlyBilling} from "./bbbMonthlyBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbLineMonthlyBilling implements BbbMonthlyBilling {
    amount: number
    nnnCodes: Code[] = [Code.回線月額料金]
    constructor(amount: number) {
        this.amount = amount
    }
}


