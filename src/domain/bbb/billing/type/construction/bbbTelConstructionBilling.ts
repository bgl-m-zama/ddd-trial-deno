import {BbbConstructionBilling, PayType} from "./bbbConstructionBilling.ts";
import {NnnBilling, NnnBillingCode, UseDateTerm} from "../../../../nnn/nnnBilling.ts";
import {Caf} from "../../../../nnn/caf.ts";
import {Member} from "../../../member.ts";
import {BbbBillingFixed} from "../../../bbbBilling.ts";
import {BbbBillingMemberCondition} from "../../condition/memberCondition.ts";

export class BbbTelConstructionBilling implements BbbConstructionBilling {
    static readonly nnnCodes: NnnBillingCode[] = [NnnBillingCode.電話工事費]
    readonly caf: Caf
    readonly amount: number
    readonly useDateTerm: UseDateTerm

    constructor(nnnBilling: NnnBilling) {
        this.caf = nnnBilling.caf
        this.amount = nnnBilling.amount
        this.useDateTerm = nnnBilling.useDateTerm
    }


    static convertTargetOnlyFrom(nnnBillings: NnnBilling[]): BbbTelConstructionBilling[] {
        return nnnBillings
            .filter(BbbTelConstructionBilling.isConvertTarget)
            .map(nttBilling => new BbbTelConstructionBilling(nttBilling))
    }

    private static isConvertTarget(nnnBilling: NnnBilling): boolean {
        return this.nnnCodes.includes(nnnBilling.code)
    }

    fix(member: Member): BbbBillingFixed | null {
        return new BbbBillingMemberCondition(member, this).valid() ? new BbbBillingFixed(member, this) : null;
    }


}