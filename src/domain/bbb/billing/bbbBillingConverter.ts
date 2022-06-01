import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../nnn/billing/nnnBilling.ts";
import {BbbLineConstructionBilling} from "./type/construction/bbbLineConstructionBilling.ts";
import {BbbLineMonthlyBilling} from "./type/monthly/bbbLineMonthlyBilling.ts";
import {BbbTelMonthlyBilling} from "./type/monthly/bbbTelMonthlyBilling.ts";
import {BbbTvMonthlyBilling} from "./type/monthly/bbbTvMonthlyBilling.ts";
import {BbbTvConstructionBilling} from "./type/construction/bbbTvConstructionBilling.ts";
import {BbbTelConstructionBilling} from "./type/construction/bbbTelConstructionBilling.ts";
import {BbbBilling} from "./bbbBilling.ts";


export class BbbBillingConverter {
    private readonly nnnBillings: NnnBilling[]
    private static readonly FACTORIES: ((nnnBillings: NnnBilling[]) => BbbBilling[])[] = [
        BbbLineMonthlyBilling.convertTargetOnlyFrom,
        BbbTelMonthlyBilling.convertTargetOnlyFrom,
        BbbTvMonthlyBilling.convertTargetOnlyFrom,
        BbbLineConstructionBilling.convertTargetOnlyFrom,
        BbbTelConstructionBilling.convertTargetOnlyFrom,
        BbbTvConstructionBilling.convertTargetOnlyFrom
    ]

    constructor(nnnBillings: NnnBilling[]) {
        this.nnnBillings = nnnBillings
    }

    invoke(): BbbBilling[] {
        return BbbBillingConverter.FACTORIES.flatMap(convertTargetOnlyFrom => convertTargetOnlyFrom(this.nnnBillings))
    }
}


