import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbTvConstructionBilling implements BbbConstructionBilling {
    amount: number
    payType: PayType
    nnnCodes: Code[] = [Code.テレビ工事費]
    constructor(amount: number, payType: PayType) {
        this.amount = amount
        this.payType = payType
    }
}