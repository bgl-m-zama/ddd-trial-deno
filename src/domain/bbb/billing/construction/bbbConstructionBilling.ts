import {BbbBilling} from "../../bbbBilling.ts";

export interface BbbConstructionBilling extends BbbBilling {
    amount: number
    payType: PayType
}

export enum PayType {
    lumpSum,
    installments
}

