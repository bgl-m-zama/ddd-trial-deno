import {BbbBilling} from "../../bbbBilling.ts";

export interface BbbConstructionBilling extends BbbBilling {
}

export enum PayType {
    lumpSum,
    installments
}

