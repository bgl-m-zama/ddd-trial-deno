import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbTelConstructionBilling implements BbbConstructionBilling {
    amount: number
    payType: PayType
    nnnCodes: Code[] = [Code.電話工事費]
    constructor(amount: number, payType: PayType) {
        this.amount = amount
        this.payType = payType
    }
}