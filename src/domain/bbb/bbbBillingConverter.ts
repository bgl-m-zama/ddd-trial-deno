import {NnnBilling, NnnBillingCode, UseDateTerm} from "../nnn/nnnBilling.ts";
import {BbbLineConstructionBilling} from "./billing/type/construction/bbbLineConstructionBilling.ts";
import {BbbLineMonthlyBilling} from "./billing/type/monthly/bbbLineMonthlyBilling.ts";
import {BbbTelMonthlyBilling} from "./billing/type/monthly/bbbTelMonthlyBilling.ts";
import {BbbTvMonthlyBilling} from "./billing/type/monthly/bbbTvMonthlyBilling.ts";
import {BbbTvConstructionBilling} from "./billing/type/construction/bbbTvConstructionBilling.ts";
import {BbbTelConstructionBilling} from "./billing/type/construction/bbbTelConstructionBilling.ts";
import {Member} from "./member.ts";
import {BbbBilling, BbbBillings} from "./bbbBilling.ts";
import {BbbBillingService} from "../../service/bbbBillingService.ts";


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


