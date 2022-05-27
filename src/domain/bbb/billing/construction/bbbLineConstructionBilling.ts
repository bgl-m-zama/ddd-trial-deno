import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {Code} from "../../../nnn/nnnBilling.ts";

export class BbbLineConstructionBilling implements BbbConstructionBilling {
    amount: number
    payType: PayType
    nnnCodes: Code[] = [Code.回線工事費, Code.端末設置費]
    constructor(amount: number, payType: PayType) {
        this.amount = amount
        this.payType = payType
    }

}


